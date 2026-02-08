import React from "react";
import { useNavigate } from "react-router"; 

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center bg-white p-10 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100">
        
        {/* Error Illustration Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-red-100 p-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Text Section */}
        <h1 className="text-9xl font-extrabold text-gray-900 tracking-tight">
          4<span className="text-red-500">0</span>4
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Oops! Looks like you’re lost in the city. The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;