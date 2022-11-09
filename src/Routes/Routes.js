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
import Details from "../Pages/Details/Details";
import ReviewForm from "../Pages/ReviewForm/ReviewForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/limitservices')
            },
            {
                path: '/services',
                element: <ServicePage></ServicePage>,
                loader: () => fetch('http://localhost:5000/services')
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
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,

            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>,

            },
            {
                path: 'details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviewform',
                element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>,


            },
        ]
    }
])
export default router;