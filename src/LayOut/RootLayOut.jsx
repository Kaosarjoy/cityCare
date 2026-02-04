import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Pages/Footer/Footer';
import Loader from '../Pages/Loader';

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      {/* Loader overlay */}
      {navigation.state === "loading" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <Loader />
        </div>
      )}

      {/* Page content */}
      <div className={navigation.state === "loading" ? "opacity-50 pointer-events-none" : ""}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
