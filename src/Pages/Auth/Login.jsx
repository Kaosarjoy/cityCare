import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import whiteImg from '../../assets/white.jpg';
import useAuth from '../../hooks/UseAuth';
import Register from '../Auth/Register';
import Swal from 'sweetalert2';
const Login = () => {
  const { LoginUser, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const handleLogin = (data) => {
  LoginUser(data.email, data.password)
    .then(() => {

      //  LOGIN SUCCESS ALERT
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'ZapShift এ স্বাগতম 🔥',
        confirmButtonColor: '#3085d6',
      }).then(() => {
        //  alert এর পর navigate
        navigate(location?.state || '/');
      });

    })
    .catch((error) => {

      //  LOGIN ERROR ALERT
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });

    });
};


  const handleGoogleSignIn = () => {
  googleSignIn()
    .then(() => {

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        timer: 1500,
        showConfirmButton: false,
      });

      navigate(location?.state || '/');
    })
    .catch((error) => {

      Swal.fire({
        icon: 'error',
        title: 'Google Login Failed',
        text: error.message,
      });

    });
};


  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ), url(${whiteImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full max-w-md space-y-4 rounded-2xl p-6 sm:p-8 shadow-2xl text-white"
      >
        <h2 className="text-3xl font-bold text-center">
          Welcome Back
        </h2>

        <p className="text-center font-semibold text-gray-300">
          Login with CityCare
        </p>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-secondary focus:outline-none"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-400 text-sm mt-1">
              Email is required
            </span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-secondary focus:outline-none"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-400 text-sm mt-1">
              Password is required
            </span>
          )}
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <Link
            to="/forget-password"
            className="text-sm text-gray-300 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-xl transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2 text-gray-300">
          <span className="border-b border-gray-400 w-1/4"></span>
          <span className="text-sm">or</span>
          <span className="border-b border-gray-400 w-1/4"></span>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 hover:bg-white/10 transition"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            viewBox="0 0 512 512"
          >
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
          </svg>
          <span>Login with Google</span>
        </button>

        {/* Register */}
        <p className="text-center text-gray-300">
          Don’t have an account?{' '}
          <NavLink
            to="/register"
            state={location.state}
            className="text-secondary font-medium hover:underline"
          >
            Register Now
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
