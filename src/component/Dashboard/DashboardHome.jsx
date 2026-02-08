import React from "react";
import { FaTasks, FaCheckCircle, FaClock, FaUsers } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-1">
          CityCare system summary at a glance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Total Issues */}
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <div className="p-4 rounded-full bg-blue-100 text-blue-600">
            <FaTasks className="text-2xl" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Total Issues</h3>
            <p className="text-2xl font-bold text-gray-800">120</p>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <div className="p-4 rounded-full bg-yellow-100 text-yellow-600">
            <FaClock className="text-2xl" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Pending Issues</h3>
            <p className="text-2xl font-bold text-gray-800">34</p>
          </div>
        </div>

        {/* Resolved */}
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <div className="p-4 rounded-full bg-green-100 text-green-600">
            <FaCheckCircle className="text-2xl" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Resolved Issues</h3>
            <p className="text-2xl font-bold text-gray-800">71</p>
          </div>
        </div>

        {/* Users */}
        <div className="bg-white border rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <div className="p-4 rounded-full bg-purple-100 text-purple-600">
            <FaUsers className="text-2xl" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold text-gray-800">58</p>
          </div>
        </div>

      </div>

      {/* Info Section */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          System Status
        </h2>
        <p className="text-gray-600 leading-relaxed">
          CityCare Public Infrastructure Issue Reporting System is currently
          running smoothly. All reported issues are tracked in real-time and
          assigned staff members are actively working on resolution.
        </p>
      </div>

    </div>
  );
};

export default DashboardHome;
