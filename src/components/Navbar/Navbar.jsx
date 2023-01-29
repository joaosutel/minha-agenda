import React from "react";
import { FaStore } from "react-icons/fa";
import SideMenu from "../SideMenu/SideMenu";
import UserProfileCard from "../UserProfile/UserProfileCard";

const Navbar = () => {
  return (
    <div
      className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
      xshow="sidenav"
    >
      <div className="space-y-4 md:space-y-5 mt-5">
        <div className="flex items-end align-center justify-center mb-5">
          <FaStore className="mr-3 text-4xl text-red-500" />
          <h1 className="hidden md:block text-sm md:text-xl text-center text-slate-800">
            <span className="text-red-500 font-bold text-lg md:text-3xl">
              M
            </span>
            <span className="text-gray-700 font-semibold text-md md:text-2xl">
              y
            </span>{" "}
            <span className="text-red-500 font-bold text-lg md:text-3xl">
              S
            </span>
            <span className="text-gray-700 font-semibold text-md md:text-2xl">
              tore
            </span>
          </h1>
        </div>
      </div>
      <UserProfileCard userName={"User"} userType={"Administrator"} />
      <SideMenu />
    </div>
  );
};

export default Navbar;
