import axios from 'axios';
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router';
import useAuth from './UseAuth';

const axiosSecure = axios.create({
    baseURL:'http://localhost:3000'
})
const useAxios = () => {
    const navigate = useNavigate();
    const {user,signOutUser} = useAuth();
    useEffect(()=>{
    const reqInterceptor = axiosSecure.interceptors.request.use(function (config) {
        config.headers.Authorization = `Joy ${user?.accessToken}`
    return config;
  })

  //interceptor response 
  const resInterceptor = axiosSecure.interceptors.response.use((response)=>{
    return response
  },(error)=>{
    console.log(error);

    const statusCode = error.status ;
    if(statusCode == 403 || statusCode == 401){
        return signOutUser()
        .then(()=>{
            navigate('/login')
        })
    }
    return Promise.reject(error)
  })



  return ()=>{
    axiosSecure.interceptors.request.eject(reqInterceptor);
    axiosSecure.interceptors.response.eject(resInterceptor);
  }
    },[user , signOutUser , navigate])
    return axiosSecure ;
    
};

export default useAxios;