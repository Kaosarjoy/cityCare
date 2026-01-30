import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../../assets/logo.png';

const Navbar = () => {

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
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img src={logoImg} alt="logo" className="w-10" />
          <span className="text-xl font-semibold hidden md:block">
           CityCare
          </span>
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {links}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <NavLink to="/login"  className="btn btn-secondary btn-sm">
          Log In
        </NavLink>
      </div>

    </div>
  );
};

export default Navbar;
