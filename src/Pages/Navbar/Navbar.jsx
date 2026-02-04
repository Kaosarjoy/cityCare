import React from "react";
import { NavLink, useNavigate } from "react-router";
import logoImg from "../../assets/logo.png";
import ThemeToggle from "../../Toggle/theme";
import useAuth from "../../hooks/UseAuth";


const Navbar = () => {
  const navigate = useNavigate();
    const {user,signOutUser} =useAuth()
    const handleSignOutUser= ()=>{
      signOutUser()
      .then(()=>{
        navigate('/')
      })
         .catch(error => console.log(error.message));
    }
  const links = (
    <>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/aboutUs">About Us</NavLink></li>
      <li><NavLink to="/sendIssue">Send Issue</NavLink></li>
      <li><NavLink to="/allissue">All Issues</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">

      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>

        <NavLink to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="logo" className="w-10" />
          <span className="text-xl font-semibold hidden md:block text-black">
            CityCare
          </span>
        </NavLink>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {links}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-2">
        <ThemeToggle />  {/* এখানেই useTheme internally আছে */}
       {
        user ?
        <>
        <img
  src={user?.photoURL || '/default-user.png'}
  alt="user"
  className="w-10 h-10 rounded-full  object-cover"
/>
<button onClick={handleSignOutUser} className="btn btn-secondary btn-sm">
          LogOut
        </button>
        </>
         : <>
        
        <NavLink to="/login" className="btn btn-primary btn-sm">
          Log In
        </NavLink>
        <NavLink to="/register" className='btn btn-secondary btn-sm '>
        Register
        </NavLink></>
       }
      </div>

    </div>
  );
};

export default Navbar;
