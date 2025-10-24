import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from '../pages/Services';
import Profile from "../pages/Profile";
import ServiceDetails from "../pages/ServiceDetails";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import AuthLayout from './../layouts/AuthLayout';
import PrivateRoute from "../provider/PrivateRoute";


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
                element:<Services></Services>,
                loader: ()=>fetch('/petServices.json')
            },
            {
                path: '/profile',
                element:<Profile></Profile>
            },

        ]



    },
            {
                path: '/products/:id',
                element:<PrivateRoute>
                            <ServiceDetails></ServiceDetails>
                    </PrivateRoute>,
                    loader: ()=>fetch('/petServices.json')
            },
            
             {
                path: '/auth',
                element:<AuthLayout></AuthLayout>,
                children:[
                     {
                path: '/auth/signin',
                element:<Signin></Signin>,
                    },
                     {
                path: '/auth/signup',
                element:<SignUp></SignUp>,
                    },
                ]
                
            },





]))