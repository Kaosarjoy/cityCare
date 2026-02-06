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
import Contact from "../Pages/Contact/Contact";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import PrivateRouter from "./PrivateRoute";
import SendIssue from "../Pages/SendIssue/SendIssue";
import Staf from "../Pages/Staf/Staf";

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
           element:<PrivateRouter>
            <Service></Service>
           </PrivateRouter>
           },
           {
            path:'/sendIssue',
          element:<PrivateRouter>
            <SendIssue></SendIssue>
          </PrivateRouter>,
           loader:()=>fetch('/map.json').then(res=>res.json())
           },
           {
            path:'coverage',
            element:<PrivateRouter>
              <Coverage></Coverage>
            </PrivateRouter>,
            loader:()=>fetch('/map.json').then(res=>res.json())
           },
           {
            path:'beStaf',
            element:<PrivateRouter>
              <Staf></Staf>
            </PrivateRouter>,
            loader:()=>fetch('/map.json').then((res)=>res.json())
           },
           {
            path:'blog',
            Component:Blog
           },
           {
            path:"aboutUs",
            Component:AboutUs,
            loader:()=>fetch('/team.json').then(res=>res.json())
           },
           {
            path:"contact",
            Component:Contact
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
        Component:ForgetPassword
        
      }
    ]
  },
]
)