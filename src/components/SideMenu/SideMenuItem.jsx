import React from "react";
import { NavLink } from "react-router-dom";

export default function SideMenuItem({ icon, label, linkTo }) {
  return (
    <NavLink to={linkTo}>
      <div className="flex items-center align-center justify-start w-full text-md font-medium text-gray-700 py-2 px-2 hover:bg-red-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
        {icon}
        <span className="ml-2">{label}</span>
      </div>
    </NavLink>
  );
}
