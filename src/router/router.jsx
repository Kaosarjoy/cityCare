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
import AdminRoute from "./AdminRoute"
import SendIssue from "../Pages/SendIssue/SendIssue";
import Staf from "../Pages/Staf/Staf";
import Error from "../Error/Error";
import MyIssue from "../component/Dashboard/MyIssue";
import StaffList from "../component/Dashboard/StaffList";
import AllIssues from "../component/Dashboard/AllIssues";
import DashboardLayout from "../LayOut/DashBoardLayout";

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
            path:'sendIssue', // 1. slash sorano holo
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
    path:'/auth', // 2. Auth routes er jonno alada prefix deya holo
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },{
        path:'register',
        Component:Register
      },
      {
        path:'forget-password',
        Component:ForgetPassword
        
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRouter>
      <DashboardLayout></DashboardLayout>
    </PrivateRouter>,
    children:[{
      index:true , 
      element:<AdminRoute>
          <MyIssue></MyIssue>
        </AdminRoute>
    },
      {
        path:'staff-list',
        element:<AdminRoute>
          <StaffList></StaffList>
        </AdminRoute>
      },
      {
        path:'all-issues',
        element:<AdminRoute>
          <AllIssues></AllIssues>
        </AdminRoute>
      }
      // Dashboard Home eo add korte paro
    ]
  },
  {
    path:'*', 
    Component:Error
  }
]
)