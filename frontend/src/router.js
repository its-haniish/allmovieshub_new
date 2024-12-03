import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Movie1 from "./pages/movies/Movie1";
import Movie2 from "./pages/movies/Movie2";
import Movie3 from "./pages/movies/Movie3";
import Movie4 from "./pages/movies/Movie4";
import Movie5 from "./pages/movies/Movie5";
import Movie6 from "./pages/movies/Movie6";
import Movie7 from "./pages/movies/Movie7";
import Movie8 from "./pages/movies/Movie8";
import Movie9 from "./pages/movies/Movie9";
import Movie10 from "./pages/movies/Movie10";
import Movie11 from "./pages/movies/Movie11";
import Movie12 from "./pages/movies/Movie12";
import Movie13 from "./pages/movies/Movie13";
import Movie14 from "./pages/movies/Movie14";
import Movie15 from "./pages/movies/Movie15";
import Movie16 from "./pages/movies/Movie16";
import Movie17 from "./pages/movies/Movie17";
import Movie18 from "./pages/movies/Movie18";
import Movie19 from "./pages/movies/Movie19";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-flow-2024-english-with-subtitles-480p-720p-1080p",
        element: <Movie1 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-outpost-2008-hindi-english-480p-720p-1080p",
        element: <Movie2 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-18-pleasure-2021-english-with-subtitles-480p-720p-1080p",
        element: <Movie3 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-stormageddon-2015-hindi-english-480p-720p-1080p",
        element: <Movie4 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-smile-2-2024-english-with-subtitles-480p-720p-1080p",
        element: <Movie5 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-you-call-it-passion-2015-bluray-hindi-korean-480p-720p-1080p",
        element: <Movie6 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-18-woman-of-desire-1994-english-with-subtitles-480p-720p-1080p",
        element: <Movie7 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-kangaroo-2024-hindi-kannada-480p-720p-1080p",
        element: <Movie8 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-kishkindha-kaandam-2024-hindimalayalam-480p-720p-1080p",
        element: <Movie9 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-entrapment-1999-hindi-english-480p-720p-1080p",
        element: <Movie10 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-sisters-2015-hindi-english-480p-720p-1080p",
        element: <Movie11 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-buddy-2024-hindi-telugu-480p-720p-1080p",
        element: <Movie12 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-abbara-2022-hindi-kannada-480p-720p-1080p",
        element: <Movie13 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-lost-girls-and-love-hotels-2020-english-with-subtitles-480p-720p-1080p",
        element: <Movie14 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-monster-summer-2024-english-with-subtitles-480p-720p-1080p",
        element: <Movie15 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-goodrich-2024-english-with-subtitles-480p-720p-1080p",
        element: <Movie16 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-black-cab-2024-english-with-subtitles-480p-720p-1080p",
        element: <Movie17 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-back-to-black-2024-hindi-english-480p-720p-1080p",
        element: <Movie18 />,
        errorElement: <NotFound />,
    },
    {
        path: "/download-american-warships-2012-hindi-english-480p-720p-1080p",
        element: <Movie19 />,
        errorElement: <NotFound />,
    },
    {
        path: "*",
        element: <Home />,
    }
]);

export default router;
