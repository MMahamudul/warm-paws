import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../component/Home";
import Services from './../component/Services';
import Profile from "../component/Profile";

export const router = createBrowserRouter(([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:
        [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path: '/profile',
                element:<Profile></Profile>
            },

        ]



    }


]))