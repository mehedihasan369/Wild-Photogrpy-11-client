import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import MyError from "../pages/404/MyError";
import AddedServiceShow from "../pages/AddService/AddedServiceShow";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";
import MyReview from "../pages/MyReview/MyReview";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import SingleBlog from "../pages/SingleBlog/SingleBlog";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/blogs/:id',
                loader: async({params}) => {
                    return fetch(`https://wild-server.vercel.app/blogs/${params.id}`)
                  },
                element : <SingleBlog></SingleBlog>
            },
           
            {
                path : '/blogs',
                loader: async () => {
                    return fetch(`https://wild-server.vercel.app/blogs`)
                  },
                element : <Blogs></Blogs>
            },
            {
                path : '/addServiceShow',
                loader: async () => {
                    return fetch(`https://wild-server.vercel.app/addServices`)
                  },
                element : <AddedServiceShow></AddedServiceShow>
            },
            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path : '/services/:id',
                loader: async({params}) => {
                    return fetch(`https://wild-server.vercel.app/services/${params.id}`)
                  },
                element : <ServiceDetails></ServiceDetails>
            },
            {
                path : '/reviews',
                element : <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path : '/add-a-service',
                element :  <PrivateRoute>
                     <AddService></AddService>
                </PrivateRoute>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
 
        ]
    },
    { path: '*', element: <MyError></MyError> }
])