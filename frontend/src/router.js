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
<<<<<<< HEAD
        path: '/movies/:slug',
        element: <Movie />
    }
=======
        path: '/search',
        element: <Home />,
        // errorElement: <NotFound />
    },
>>>>>>> c155f571a5dcf57cdd91af6a53d2ac0e0d49fbba
]);

export default router;
