import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import logoImg from "../assets/logo.png";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open  min-h-screen max-w-7xl mx-auto bg-accent text-black">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col bg-white">
        {/* TOP NAVBAR */}
        <nav className="navbar bg-white border-b px-4">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <h2 className="text-lg font-semibold">Dashboard</h2>
        </nav>

        {/* PAGE CONTENT */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 min-h-full bg-white border-r flex flex-col">
          {/* LOGO */}
          <div className="p-4 border-b flex items-center gap-3">
            <img src={logoImg} alt="CityCare Logo" className="w-12 h-12" />
            <h2 className="text-xl font-bold">CityCare</h2>
          </div>

          {/* MENU */}
          <ul className="menu p-4 gap-1 flex-1">
            <li>
              <NavLink to="/" >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard" >
                Dashboard Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/all-issues" >
                All Issues
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-staff">
                Add Staff
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/staff-list">
                Staff List
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/myissue">
                My Issues
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
