import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from '../pages/Services';
import Profile from "../pages/Profile";
import ServiceDetails from "../pages/ServiceDetails";

export const router = createBrowserRouter(([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:
        [
            {
                index: true,
                element:<Home></Home>,
                loader: ()=>fetch('/petServices.json')
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



    },
     {
                path: '/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ()=>fetch('/petServices.json')
            },



]))