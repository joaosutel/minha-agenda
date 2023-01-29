import React, { useState, useEffect } from "react";

export default function InputText({
  id,
  type,
  label,
  placeholder,
  value,
  required,
  callback,
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className="mb-6 text-left">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={inputValue}
        required={required}
        onChange={(e) => {
          callback(e.target.value);
        }}
        onBlur={() => callback(inputValue)}
      />
    </div>
  );
}
