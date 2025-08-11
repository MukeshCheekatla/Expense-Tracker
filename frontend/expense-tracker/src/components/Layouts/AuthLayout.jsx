import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-teal-600 flex-col justify-center items-center p-16">
        <h1 className="text-white text-5xl font-extrabold select-none">
          Expense Tracker
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 bg-white justify-center items-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
