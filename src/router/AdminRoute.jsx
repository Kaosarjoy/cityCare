import React from 'react';
import useAuth from '../hooks/UseAuth';
import UserRole from '../hooks/UserRole';
import Loader from '../Pages/Loader';
import Error from '../Error/Error';

const AdminRoute = ({children}) => {
     const {loading}=useAuth();
     const {role , roleLoading}=UserRole();
    

    if(loading || roleLoading){
        return   <div className="min-h-screen flex flex-col items-center justify-center gap-3">
           <Loader></Loader>
    </div>
    }

    if(role !='admin'){
        return <Error></Error>
    }
    return children;
};

export default AdminRoute;