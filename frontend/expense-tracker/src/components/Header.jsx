// components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ variant = "simple" }) => {
  const baseClasses = "font-bold text-teal-700";
  const containerClasses =
    "w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200";
  const innerClasses =
    "max-w-[90rem] mx-auto flex justify-between items-center px-4 md:px-12 py-4";

  if (variant === "landing") {
    return (
      <header className={containerClasses}>
        <div className={innerClasses}>
          <Link to="/" className={`${baseClasses} text-2xl`}>
            Expense Tracker
          </Link>
          <nav className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
    );
  }

  if (variant === "auth") {
    return (
      <header className={containerClasses}>
        <div className={innerClasses}>
          <Link to="/" className={`${baseClasses} text-2xl`}>
            Expense Tracker
          </Link>
        </div>
      </header>
    );
  }

  if (variant === "dashboard") {
    return (
      <header className={containerClasses}>
        <div className={innerClasses}>
          <span className="text-teal-700 text-xl font-semibold">
            Expense Tracker
          </span>
        </div>
      </header>
    );
  }

  return null;
};

export default Header;
