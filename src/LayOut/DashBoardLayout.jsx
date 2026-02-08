// DashboardLayout.jsx
import React from "react";
import { NavLink, Outlet, Navigate } from "react-router";
import logoImg from "../assets/logo.png";
import useAuth from "../hooks/UseAuth";
import useAxios from "../hooks/Useaxios";
import { useQuery } from "@tanstack/react-query";

// Protected route wrapper
const ProtectedRoute = ({ role, allowedRoles, children }) => {
  if (!role) return <div className="p-4">Loading...</div>;
  if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;
  return children;
};

const DashboardLayout = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  // fetch user role
  const { data: userInfo = {}, isLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data; // { role: "admin" } expected
    },
  });

  const role = userInfo?.role; // admin | staff | user

  if (isLoading) return <div className="p-4">Loading...</div>;

  return (
    <div className="drawer lg:drawer-open min-h-screen max-w-7xl mx-auto bg-accent text-black">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col bg-white">
        {/* TOP NAV */}
        <nav className="navbar bg-white border-b px-4">
          <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
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
            {/* Common for all */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {/* Citizen */}
           
{role === "user" && (
  <>
    <li>
      <NavLink to="/dashboard/myissue">My Issues</NavLink>
    </li>
    <li>
      <NavLink to="/sendIssue">Report Issue</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/profile">Profile</NavLink>
    </li>
  </>
)}


            {/* Staff */}
            {role === "staff" && (
              <>
                <li>
                  <NavLink to="/dashboard/assigned-issues">Assigned Issues</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/profile">My Profile</NavLink>
                </li>
              </>
            )}

            {/* Admin */}
            {role === "admin" && (
              <>
                <li>
                  <NavLink to="/dashboard/all-issues">All Issues</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/staff-list">Staff List</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payments">Payments</NavLink>
                </li>
              </>
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export { DashboardLayout, ProtectedRoute };
