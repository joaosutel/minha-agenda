import React, { useEffect, useState } from "react";
import { capitalize } from "../../../utils/textFormat";

export default function InputSelect({
  id,
  label,
  defaultOption,
  data,
  value,
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
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={inputValue}
        onChange={(e) => {
          callback(+e.target.value);
        }}
      >
        <option value={0}>{defaultOption}</option>
        {data.map((row, index) => {
          return (
            <option key={index} value={row.id}>
              {capitalize(row.category_name)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
