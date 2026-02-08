import axios from 'axios';
import { useNavigate } from 'react-router';
import useAuth from './UseAuth';
import { useEffect } from 'react';

const useAxios = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
  });

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(); // Firebase থেকে token নাও
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        const statusCode = error.response?.status;
        if (statusCode === 401 || statusCode === 403) {
          signOutUser().then(() => navigate('/login'));
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, signOutUser, navigate]);

  return axiosSecure;
};

export default useAxios;
