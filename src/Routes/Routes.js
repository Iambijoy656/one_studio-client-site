import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import ServicePage from "../Pages/ServicePage/ServicePage";
import SignUp from "../Pages/SignUp/SignUp";

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
        ]
    }
])
export default router;