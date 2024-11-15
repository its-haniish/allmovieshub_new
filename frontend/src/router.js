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
]);

export default router;
