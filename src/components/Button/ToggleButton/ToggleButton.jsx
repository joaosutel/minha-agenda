import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css";

export default function ToggleButton({ value, callback }) {
  const id = uuidv4();

  return (
    <div className="flex justify-center">
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id={id}
            type="checkbox"
            className="hidden"
            checked={value}
            onChange={callback}
          />
          <div className="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"></div>
          <div className="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
        </div>
      </label>
    </div>
  );
}
