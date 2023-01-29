import React, { useEffect, useState } from "react";

export default function InputCheckbox({
  id,
  label,
  checked,
  callback,
  required,
}) {
  const [checkboxValue, setCheckboxValue] = useState("");

  useEffect(() => {
    setCheckboxValue(checked);
  }, [checked]);

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          className="w-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          checked={checkboxValue}
          onChange={() => {
            const value = !checkboxValue;
            callback(value);
            setCheckboxValue(value);
          }}
          required={required}
        />
      </div>
      <label
        htmlFor={id}
        className="ml-2 text-sm text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
    </div>
  );
}
