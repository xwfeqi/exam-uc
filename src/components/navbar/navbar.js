import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-black bg-opacity-50 shadow fixed top-0 left-0 w-full z-50 p-1">
      {/* Обмеження ширини навігаційного меню */}
      <nav className="max-w-screen-md mx-auto flex items-center justify-center p-4">
        {/* Посилання */}
        <Link
          to="/"
          className={`mx-6 text-base font-semibold font-poppins ${
            location.pathname === "/"
              ? "text-white border-b-2 border-blue-500"
              : "text-gray-300 border-b-2 border-transparent hover:text-white hover:border-blue-500"
          }`}
        >
          Home
        </Link>

        <Link
          to="/aboutProject"
          className={`mx-6 text-base font-semibold font-poppins ${
            location.pathname === "/aboutProject"
              ? "text-white border-b-2 border-blue-500"
              : "text-gray-300 border-b-2 border-transparent hover:text-white hover:border-blue-500"
          }`}
        >
          About Project
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
