require("dotenv").config();
const connectDB = require("./utils/connectDB");
const puppeteer = require("puppeteer");
const { Posts, Pages } = require("./models/Posts");

const main = async () => {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-notifications',
                '--disable-popup-blocking'
            ]
        });
        const page = await browser.newPage();

        // Find the existing page document
        const pageInfo = await Pages.findOne({});

        if (pageInfo && pageInfo.pageUrl) {
            console.log(`Resuming from last scraped page: ${pageInfo.pageUrl}`);
            await page.goto(pageInfo.pageUrl);  // Resume from the last scraped URL
        } else {
            console.log("No previous page found, starting from homepage.");
            await page.goto('https://allmovieshub.pl/');  // Default URL if not found
        }

        // Scrape the page for posts
        const scrapePage = async () => {
            const postList = await page.evaluate(() => {
                let posts = Array.from(document.querySelectorAll('.post-item'));
                return posts.map(post => {
                    let postUrl = post.querySelector('a').href;
                    let title = post.querySelector('h3').innerText;
                    let featuredImage = post.querySelector('img').src;
                    return { postUrl, title, featuredImage };
                });
            });

            // Loop through the postList to scrape individual posts
            for (let post of postList) {
                console.log(`Scraping post: ${post.title}`);

                try {
                    await page.goto(post.postUrl);

                    let postDetails = await page.evaluate((post) => {
                        const {
                            title,
                            featuredImage,
                        } = post;
                        const unwantedWords = ["|", "480p", "720p", "1080p", "hindi", "english", "download", "complete", "&"];
                        const spans = Array.from(document.querySelectorAll('span'));

                        const imdbRating = spans.find((elem) => elem.innerText.trim() === "IMDb Rating")?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const releaseYear = spans.find((elem) => elem.innerText.trim() === "Release Year")?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const genres = spans.find((elem) => elem.innerText.trim() === "Genre")?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const format = spans.find((elem) => elem.innerText.trim() === "Format")?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const language = spans.find((elem) => elem.innerText.trim() === "Language")?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const starCast = spans.find((elem) => elem.innerText.trim() === "Star Cast")?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const director = spans.find((elem) => elem.innerText.trim() === "Director")?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const fileSize = spans.find((elem) => elem.innerText.trim() === "File Size")?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const quality = spans.find((elem) => elem.innerText.trim() === "Quality")?.parentElement?.parentElement?.innerText.split(":")[1]?.trim() || "N/A";
                        const image = spans.find((elem) => elem.innerText.trim().includes('Screenshots: “See Before Downloading”'))?.parentElement?.nextElementSibling?.nextElementSibling?.getElementsByTagName("img")[0]?.src || "No image available";
                        const slug = location.pathname.split('/').filter(Boolean).pop();
                        const words = title.toLowerCase().split(" ");
                        const keywords = words.filter(word => !unwantedWords.includes(word));
                        const metaDesc = `${title} in HD quality for free.`;
                        const synopsis = spans.find((e) => e.innerText.includes("SYNOPSIS"))?.parentElement?.parentElement?.nextElementSibling?.getElementsByTagName("p")[0]?.innerText || "No synopsis available";

                        const ems = Array.from(document.querySelectorAll('em'));
                        const downloadLinks = ems.slice(1).map(em => {
                            return { type: em.innerText, link: em.parentElement?.href };
                        });


                        return {
                            title,
                            featuredImage,
                            imdbRating,
                            releaseYear,
                            genres,
                            format,
                            language,
                            starCast,
                            director,
                            fileSize,
                            quality,
                            image,
                            slug,
                            keywords,
                            metaDesc,
                            synopsis,
                            downloadLinks
                        };
                    }, post);

                    const existingPost = await Posts.findOne({ title: postDetails.title });
                    if (existingPost) {
                        console.log(`Post already exists: ${post.title}`);
                    } else {
                        // save the post

                        await Posts.create(postDetails);  // Save the new post to the database
                        console.log(`Post saved: ${post.title}`);
                    }

                    console.log(postDetails);

                } catch (error) {
                    console.error(`Error scraping post: ${post.title}`, error);
                }
            }
            try {
                // Find the existing page document
                const pageInfo = await Pages.findOne({});

                if (pageInfo && pageInfo.pageUrl) {
                    console.log(`Resuming from last scraped page: ${pageInfo.pageUrl}`);
                    await page.goto(pageInfo.pageUrl);  // Resume from the last scraped URL
                } else {
                    console.log("No previous page found, starting from homepage.");
                    await page.goto('https://allmovieshub.pl/');  // Default URL if not found
                }

                const nextButton = await page.$('.nextpostslink');
                if (nextButton) {
                    console.log("Going to next page...");
                    await Promise.all([
                        page.evaluate(nextButton => nextButton.click(), nextButton),
                        page.waitForNavigation({ waitUntil: 'domcontentloaded' })
                    ]);

                    // Update the page URL in the database
                    const newPageUrl = page.url();
                    await Pages.findOneAndUpdate({}, { pageUrl: newPageUrl }, { upsert: true });
                    console.log(`Page URL updated: ${newPageUrl}`);
                    await scrapePage();  // Recursive call to continue scraping the next page
                } else {
                    console.log("No next page found.");
                }
            } catch (error) {
                console.error("Error going to the next page:", error);
            }
        };

        // Start scraping the page
        await scrapePage();

    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
};

// Connect to MongoDB
connectDB(process.env.MONGO_URI)
    .then(() => {
        console.log("Starting the scraping process...");
        main();
    })
    .catch((err) => {
        console.error(err);
    });
