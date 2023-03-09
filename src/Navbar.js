import React from 'react';
import logo from './images/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-500">
      <div className="container mx-auto flex items-center justify-between px-16 py-3">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <h1 className="ml-2 text-lg font-medium text-white">Resume</h1>
        </div>
        <div className="flex items-center">
          <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:text-indigo-100">
            Home
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:text-indigo-100">
            About
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:text-indigo-100">
            Portfolio
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:text-indigo-100">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
