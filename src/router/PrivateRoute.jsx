import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/UseAuth';
import Loader from '../Pages/Loader';

const PrivateRouter = ({children}) => {
    const {user,loading}=useAuth();
    const location =useLocation();
   // console.log(location);
    if(loading){
        return   <div className="min-h-screen flex flex-col items-center justify-center gap-3">
           <Loader></Loader>
    </div>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRouter;