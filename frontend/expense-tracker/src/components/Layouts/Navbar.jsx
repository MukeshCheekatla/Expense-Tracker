import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center gap-5 bg-white border-b border-gray-200/50 backdrop-blur-sm py-4 px-7 sticky top-0 z-30 shadow-sm">
      {/* Hamburger / Close Icon */}
      <button
        className="block lg:hidden text-teal-700 hover:text-teal-900 transition"
        onClick={() => setOpenSideMenu(!openSideMenu)}
        aria-label={openSideMenu ? "Close menu" : "Open menu"}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      {/* Title */}
      <h2 className="text-xl font-bold text-teal-700 select-none cursor-default">
        Expense Tracker
      </h2>

      {/* Side menu overlay */}
      {openSideMenu && (
        <div className="fixed top-[61px] left-0 w-full bg-white shadow-md z-40">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
