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
import Loading from "../pages/Loading";
import ForgotPassword from "../pages/ForgetPassword";
import Errorpage from "../pages/ErrorPage";
import PrivacyPolicy from "../component/PrivacyPolicy";


export const router = createBrowserRouter(([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:
        [
            {
                index: true,
                element:<Home></Home>,
                loader: ()=>fetch('/petServices.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/services',
                element:<Services></Services>,
                loader: ()=>fetch('/petServices.json'),
                hydrateFallbackElement: <Loading></Loading>
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
                    loader: ()=>fetch('/petServices.json'),
                    hydrateFallbackElement: <Loading></Loading>
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
            {
                path: '/auth/forgot-password',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
             {
            path:'*',
            element:<Errorpage></Errorpage>
            }





]))