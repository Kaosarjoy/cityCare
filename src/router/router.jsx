import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter(
[
    {
        path:'/',
        Component:RootLayOut,
        children:[
           {
             index : true,
             Component:Home
           },
           {
            path:'/service',
            Component:Service
           },{
            path:'/coverage',
            Component:Coverage,
            loader:()=>fetch('/map.json').then(res=>res.json())
           }
        ]
    }
]
)