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
import MyReview from "../Pages/MyReview/MyReview";
import AddService from "../Pages/AddService/AddService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://one-studio-server.vercel.app/limitservices')
            },
            {
                path: '/services',
                element: <ServicePage></ServicePage>,
                loader: () => fetch('https://one-studio-server.vercel.app/services')
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
                element: <Gallery></Gallery>,

            },
            {
                path: 'details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://one-studio-server.vercel.app/services/${params.id}`)
            },
            {
                path: 'reviewform/:id',
                element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>,
                loader: ({ params }) => fetch(`https://one-studio-server.vercel.app/services/${params.id}`)


            },
            {
                path: '/review',
                element: <MyReview></MyReview>
            },
            {
                path: '//addservice',
                element: <AddService></AddService>
            }
        ]
    }
])
export default router;