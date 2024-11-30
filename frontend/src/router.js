// router.js
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: '/movies',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: '/search',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: '/:slug',
        element: <Movie />,
        errorElement: <NotFound />,
    },
]);

export default router;