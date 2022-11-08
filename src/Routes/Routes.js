import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import ServicePage from "../Pages/ServicePage/ServicePage";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import Gallery from "../Pages/Gallery/Gallery";
import PrivateRoute from "./PrivateRoute.js/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('services.json')
            },
            {
                path: '/services',
                element: <ServicePage></ServicePage>,
                loader: () => fetch('services.json')
            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,

            },
            {
                path: '/profile',
                element: <Profile></Profile>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>,

            },
            {
                path: '/gallery',
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,

            },
        ]
    }
])
export default router;