// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script'; // Importing Next.js Script component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the website, including SEO and Open Graph properties
export const metadata: Metadata = {
  title: "AllMoviesHub - 300mb Movies, 480p Movies, 720p Movies, Hindi Dubbed Series, 1080p Movies, Tv series download, Hubflix, Hubflixhd, Thehubflix, Hdmovieshub, Hdmovieshub.in, Hdmovieshub 300mb, Allmovieshub, Mkvhub, dailydrivelink, moviesflix, hdmoviearea",
  description: "Download 300mb Movies, 480p Movies, 720p Movies, AllHDMovies & Latest Netflix, Cw and lots more TV Series in Dual Audio (English and Hindi) available in Google Drive Link.",
  keywords: "all movie hub com, all movies hub com, hd movies hub 300, hdmovieshub.in 2022, hub hd movies, hdmovieshub.in 2023, movie hub 300, movies hub 300, hdmovieshub 2022, hdmovieshub 300mb, movies 300mb mkv, movies mkv 300mb, hubflix 300, movies hubflix, allmovieshub in 2023, hubflix 300mb, hd movie hub 300mb, hdmovieshub hubflix, movie hub 300mb, movies hub 300mb, all hdmoviearea, hdmovieshub.in 2019, 300mb movies all movies hub, hubflix com movie",
  openGraph: {
    title: "AllMoviesHub",
    description: "Download 300mb Movies, 480p Movies, 720p Movies, AllHDMovies & Latest Netflix, Cw and lots more TV Series in Dual Audio (English and Hindi) available in Google Drive Link.",
    url: "https://allmovieshub.live/",
    siteName: "AllMoviesHub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <link rel="canonical" href="https://allmovieshub.live/" />
        <link rel="next" href="https://allmovieshub.live/explore/movie/" />
        <meta name="google-site-verification" content="LD4MBsF2575rjVfNnzCgM6KbCsM7U4hGQ75TNmKXCeo" />

        {/* Google Tag Manager (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RNZX7KQM8G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-RNZX7KQM8G');
              `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div id="container-a224aeb344eece72bf0ce9ab1fa2fe53"></div>
        {children}


        {/* Ad Scripts */}

        {/* Ad Scripts using Next.js Script component */}
        <Script
          type="text/javascript"
          strategy="afterInteractive" // Ensures script loads after the page loads
          dangerouslySetInnerHTML={{
            __html: `
              var atOptions = {
                'key' : 'f4c245f8cf98fae0a3d1cdeb6e640c18',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `,
          }}
        />

        <Script
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var atOptions = {
                'key' : '5f799423a6858bfda5191a87a6242c19',
                'format' : 'iframe',
                'height' : 600,
                'width' : 160,
                'params' : {}
              };
            `,
          }}
        />

        <Script
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var atOptions = {
                'key' : '266d5c6f74c869bcc68cc573f407c266',
                'format' : 'iframe',
                'height' : 300,
                'width' : 160,
                'params' : {}
              };
            `,
          }}
        />

        {/* External Ad Scripts */}
        <Script
          type="text/javascript"
          src="//offspringthisscarcely.com/05537bc5ba249a7bfd59bb5e25296173/invoke.js"
          strategy="afterInteractive"
        />

        <Script
          type="text/javascript"
          src="//offspringthisscarcely.com/bd/4f/c1/bd4fc1b8981c9f6e7fa2f6d458b9bf0a.js"
          strategy="afterInteractive"
        />

        <Script
          type="text/javascript"
          src="//offspringthisscarcely.com/19/b0/eb/19b0eb287cd4c645ded27638be1d8137.js"
          strategy="afterInteractive"
        />

        <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var atOptions = {
                'key' : '9d12847802f72d01b0cfbdee18685fa3',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
              };
            `,
          }}
        />

        <Script
          type="text/javascript"
          src="//offspringthisscarcely.com/9d12847802f72d01b0cfbdee18685fa3/invoke.js"
          strategy="afterInteractive"
        />



      </body>
    </html>
  );
}
