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
import StaffList from "../component/Dashboard/StaffList";
import AllIssues from "../component/Dashboard/AllIssues";
import { DashboardLayout } from "../LayOut/DashBoardLayout";
import MyIssue from "../component/Dashboard/MyIssue";
import DashboardHome from "../component/Dashboard/DashboardHome";
import ManageUsers from "../component/Dashboard/ManageUsers";
import Payments from "../component/Dashboard/Payments";
import IssueDetails from "../component/Dashboard/IssueDetails";
import Profile from "../component/Dashboard/Profile";
import CitizenRoute from "./CitizenRoute";

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
            path:'sendIssue', 
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
           },
           {
  path: "/issue/:id",
  element: <PrivateRouter>
    <IssueDetails></IssueDetails>
    </PrivateRouter>,
}
           
        ]
    },
    {
    path:'/auth', // 2. Auth routes er jonno alada code
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
    <DashboardLayout />
  </PrivateRouter>,
  children:[
    {
      index:true,
      element:<DashboardHome />
    },
    {
      path:'myissue',
      element:<MyIssue />
    },
    {
      path:'all-issues',
      element:<AdminRoute><AllIssues /></AdminRoute>
    },
    {
      path:'staff-list',
      element:<AdminRoute><StaffList /></AdminRoute>
    },{
  path: "manage-users",
  element: <AdminRoute>
    <ManageUsers></ManageUsers>
    </AdminRoute>
},{
  path:'payments',
  element:<AdminRoute>
    <Payments></Payments>
  </AdminRoute>
},
{
  path:'profile',
  element:<Profile></Profile>
}

  ]
},
  {
    path:'*', 
    Component:Error
  }
]
)
//kaosarjoy@gmail.com
//@Joy123