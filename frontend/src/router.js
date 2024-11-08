// router.js
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

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
]);

export default router;
