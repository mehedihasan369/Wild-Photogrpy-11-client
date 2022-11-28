import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import MyError from "../pages/404/MyError";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";

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