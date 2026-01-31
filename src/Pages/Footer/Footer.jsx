import React from "react";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black ">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div className="text-center sm:text-left">
          <img
            src={logoImg}
            alt="CityCare Logo"
            className="w-28 mx-auto sm:mx-0 mb-4"
          />
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
            CityCare is a civic service platform helping citizens
            report and resolve city issues like roads, waste and safety.
          </p>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">Road Issues</li>
            <li className="hover:text-primary cursor-pointer">Waste Management</li>
            <li className="hover:text-primary cursor-pointer">Drainage Problems</li>
            <li className="hover:text-primary cursor-pointer">Street Lights</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center sm:text-left">
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Coverage</li>
            <li className="hover:text-primary cursor-pointer">Blog</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center sm:text-left">
          <h6 className="text-lg font-semibold mb-4">Stay Updated</h6>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Get city updates & service announcements.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="input input-bordered w-full text-black dark:text-white dark:bg-gray-800"
            />
            <button className="btn btn-primary w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} CityCare. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-primary cursor-pointer">Privacy</span>
            <span className="hover:text-primary cursor-pointer">Terms</span>
            <span className="hover:text-primary cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
