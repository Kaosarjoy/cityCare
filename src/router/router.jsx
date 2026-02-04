import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Coverage from "../Pages/Coverage/Coverage";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AuthLayout from "../LayOut/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

export const router = createBrowserRouter(
[
    {
        path:'/',
        Component:RootLayOut,
        children:[
           {
             index : true,
             Component:Home,
            loader:()=>fetch('/team.json').then(res=>res.json())
           },
           {
            path:'services',
            Component:Service
           },{
            path:'coverage',
            Component:Coverage,
            loader:()=>fetch('/map.json').then(res=>res.json())
           },
           {
            path:'blog',
            Component:Blog
           },
           {
            path:"aboutUs",
            Component:AboutUs,
            loader:()=>fetch('/team.json').then(res=>res.json())
           }
           
        ]
    },
    {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },{
        path:'/register',
        Component:Register
      },
      {
        path:'/forget-password',
        
      }
    ]
  },
]
)