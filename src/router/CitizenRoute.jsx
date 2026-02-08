import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/UseAuth";


const CitizenRoute = () => {
  const { user, role, loading } = useAuth();

  if (loading) {
    // loader দেখাতে পারো
    return <div>Loading...</div>;
  }

  if (!user) {
    // যদি login না থাকে
    return <Navigate to="/login" replace />;
  }

  if (role !== "user") {
    // যদি login আছে কিন্তু role user না হয়
    return <Navigate to="/unauthorized" replace />;
  }

  // সব ঠিক থাকলে child route দেখাবে
  return <Outlet />;
};

export default CitizenRoute;
