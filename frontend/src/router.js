// router.js
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        // errorElement: <NotFound />
    },
    {
        path: '/movies',
        element: <Home />,
        // errorElement: <NotFound />
    },
    {
        path: '/movies/:slug',
        element: <Movie />
    }
    , {
        path: '/search',
        element: <Home />,
        // errorElement: <NotFound />
    },
]);

export default router;
