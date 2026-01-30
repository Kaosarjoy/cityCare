import React from "react";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <img src={logoImg} alt="CityCare Logo" className="w-32 mb-4" />
          <p className="text-sm leading-6 text-black">
            CityCare is a civic service platform helping citizens
            report and resolve city issues like roads, waste and safety.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2 text-sm text-black">
            <li className="hover:text-primary cursor-pointer">Road Issues</li>
            <li className="hover:text-primary cursor-pointer">Waste Management</li>
            <li className="hover:text-primary cursor-pointer">Drainage Problems</li>
            <li className="hover:text-primary cursor-pointer">Street Lights</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2 text-sm text-black">
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Coverage</li>
            <li className="hover:text-primary cursor-pointer">Blog</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Stay Updated</h6>
          <p className="text-sm text-black mb-3">
            Get city updates & service announcements.
          </p>
          <div className="join w-full">
            <input
              type="email"
              placeholder="you@email.com"
              className="input input-bordered join-item w-full text-black"
            />
            <button className="btn btn-primary join-item">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} CityCare. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
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
