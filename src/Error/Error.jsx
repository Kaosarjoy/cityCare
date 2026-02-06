import React from "react";
import errorImg from "../assets/error.png"; // 1080px image prefer
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Image Section */}
      <div className="relative w-full max-w-4xl">
        <img
          src={errorImg}
          alt="Error Page"
          className="w-full h-80 sm:h-96 md:height-[500px] lg:height-[550px] object-cover rounded-xl shadow-lg"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 rounded-xl">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-2">
            404
          </h1>
          <p className="text-white text-lg sm:text-2xl mb-6 text-center">
            Oops! Page not found. Looks like you’re lost in the city 
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-secondary transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
