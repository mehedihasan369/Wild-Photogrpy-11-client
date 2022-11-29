import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import MyError from "../pages/404/MyError";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";
import MyReview from "../pages/MyReview/MyReview";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import SingleBlog from "../pages/SingleBlog/SingleBlog";

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
                    return fetch(`https://my-edu-server.vercel.app/blogs/${params.id}`)
                  },
                element : <SingleBlog></SingleBlog>
            },
           
            {
                path : '/blogs',
                loader: async () => {
                    return fetch(`https://my-edu-server.vercel.app/blogs`)
                  },
                element : <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path : '/services/:id',
                loader: async({params}) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                  },
                element : <ServiceDetails></ServiceDetails>
            },
            {
                path : '/reviews',
                element :  <MyReview></MyReview>
            },
            {
                path : '/add-a-service',
                element : <AddService></AddService>
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