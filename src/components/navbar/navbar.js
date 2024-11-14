import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="relative shadow bg-gray-600 bg-opacity-75 z-10">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/123"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            Home
          </Link>

          <Link
            to="/aboutProject"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            AboutProject
          </Link>

          <Link
            to="/pricing"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Pricing
          </Link>

          <Link
            to="/blog"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
