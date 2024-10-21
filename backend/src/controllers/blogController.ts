import { Request, Response } from 'express';
import Blogs from '../models/Blogs'; // Adjust the path to your Blogs model accordingly

// Function to create a new blog entry
export const createBlog = async (req: Request, res: Response): Promise<void> => {
    try {
        const { featured, slug, title, contents, keywords, description, author } = req.body;

        // Create a new blog document
        const savedBlog = await Blogs.create({
            featured,
            slug,
            title,
            contents,
            author,
            keywords,
            description
        });

        savedBlog ?
            res.status(201).json({ message: 'Blog created successfully', blog: savedBlog }) :
            res.status(400).json({ message: 'Failed to create blog' });
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ message: 'Failed to create blog', error });
    }
};

// Function to delete a blog entry
export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
    try {
        const { slug } = req.body;

        // Delete blog by slug or id
        const deletedBlog = await Blogs.findOneAndDelete({ slug });

        deletedBlog ?
            res.status(200).json({ message: 'Blog deleted successfully' }) :
            res.status(404).json({ message: 'Blog not found' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).json({ message: 'Failed to delete blog', error });
    }
};

// Function to update a blog entry
export const updateBlog = async (req: Request, res: Response): Promise<void> => {
    try {
        const { slug, data } = req.body;

        // Find the blog by slug and update its data
        const updatedBlog = await Blogs.findOneAndUpdate({ slug }, data);

        updatedBlog ?
            res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog }) :
            res.status(404).json({ message: 'Blog not found' });
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Failed to update blog', error });
    }
};

// Function to fetch a blog by its slug
export const getBlogBySlug = async (req: Request, res: Response): Promise<void> => {
    try {
        const { slug } = req.body;

        // Find the blog by slug
        const blog = await Blogs.findOne({ slug });

        if (blog) {
            // If blog is found, send it as response
            res.status(200).json(blog);
        } else {
            // If no blog is found, send a 404 response
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        res.status(500).json({ message: 'Failed to fetch blog', error });
    }
};

// Function to fetch all blogs with pagination and sorting by time (POST request)
export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const { page = 1 } = req.body; // Get the page number from the request body, default to 1 if not provided
        const limit = 8; // Limit to 8 blogs per page
        const skip = (page - 1) * limit; // Calculate how many documents to skip

        // Fetch the blogs sorted by createdAt (latest first) with pagination
        const blogs = await Blogs.find({}, 'featured title') // Select only 'featured' and 'title'
            .sort({ createdAt: -1 }) // Sort by time, latest first
            .skip(skip)
            .limit(limit);

        // Get the total number of blogs for pagination purposes
        const totalBlogs = await Blogs.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalBlogs / limit);

        res.status(200).json({
            page,
            totalPages,
            totalBlogs,
            blogs,
        });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ message: 'Failed to fetch blogs', error });
    }
};


// Function to get all slugs and titles of blogs
export const getAllSlugsAndTitles = async (req: Request, res: Response): Promise<void> => {
    try {
        // Fetch all blogs and select only slug and title
        const blogs = await Blogs.find({}, 'slug title').sort({ createdAt: -1 }) // Sort by time, latest first

        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching slugs and titles:', error);
        res.status(500).json({ message: 'Failed to fetch slugs and titles', error });
    }
}