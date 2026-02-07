import React from 'react';
import { FaBolt, FaTools, FaTrashAlt, FaWater } from 'react-icons/fa';

const Service = () => {
  const services = [
    {
      icon: <FaBolt className="text-4xl text-yellow-500" />,
      title: "Broken Streetlights",
      description: "Report non-functional streetlights to ensure safety and visibility on city roads."
    },
    {
      icon: <FaTools className="text-4xl text-blue-500" />,
      title: "Pothole Repair",
      description: "Submit locations of dangerous potholes that require immediate road maintenance."
    },
    {
      icon: <FaWater className="text-4xl text-sky-500" />,
      title: "Water Leakage",
      description: "Report burst pipes or water leakage issues to prevent wastage and infrastructure damage."
    },
    {
      icon: <FaTrashAlt className="text-4xl text-green-600" />,
      title: "Garbage Overflow",
      description: "Identify areas with overflowing bins for prompt waste collection and cleaning."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider">What We Handle</h2>
          <p className="text-4xl font-extrabold text-[#003d3d] mt-2 mb-4">
            Public Infrastructure Services
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CityCare allows citizens to report various public issues directly to the municipal authorities for efficient resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#003d3d] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Optional: Add a visual representation of how reporting works */}
        <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-[#003d3d] mb-8">How to Report</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-48">1. Take Photo</div>
                <div className="text-2xl font-bold text-gray-400">→</div>
                <div className="bg-white p-4 rounded-lg shadow-sm w-48">2. Pin Location</div>
                <div className="text-2xl font-bold text-gray-400">→</div>
                <div className="bg-white p-4 rounded-lg shadow-sm w-48">3. Submit Issue</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Service;