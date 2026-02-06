import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './UseAuth';
import useAxios from './Useaxios';


const UserRole = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios();
    const { isLoading:roleLoading,data : role='user'} =useQuery({
        queryKey : ['user-role',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/${user.email}/role`);
           // console.log('user role is ',res.data)
            return res.data?.role;
        }
    })
    return {roleLoading, role}
};

export default UserRole;


