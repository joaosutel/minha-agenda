import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export default function UserProfileCard({ userName, userType }) {
  return (
    <div className="flex flex-col items-center justify-center border-b-2 border-gray-200 pt-10">
      <BsPersonCircle className="text-6xl text-gray-400 mb-2" />
      <div>
        <h2 className="font-bold text-md md:text-lg text-center text-red-500">
          {userName}
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">{userType}</p>
      </div>
    </div>
  );
}
