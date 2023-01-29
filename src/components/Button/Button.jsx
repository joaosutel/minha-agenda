import React from "react";

export default function Button({
  icon,
  text,
  buttonStyle,
  textStyle,
  callback,
}) {
  return (
    <div
      className={`flex items-center align-center justify-center cursor-pointer px-2 ${buttonStyle} ${textStyle}`}
      onClick={() => callback()}
    >
      {icon}
      <span className="ml-2 text-white">{text}</span>
    </div>
  );
}
