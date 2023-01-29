import React from "react";

export default function Header({ title }) {
  return (
    <header className="flex px-4 pb-4">
      <div className="border-b-4 border-red-500 pr-2">
        <span className="font-bold text-red-500 text-3xl">{title[0]}</span>
        <span className="font-semibold text-gray-700 text-2xl">
          {title.substring(1)}
        </span>
      </div>
      <div className="flex-1 text-right"></div>
    </header>
  );
}
