import React from "react";

const FormInput = ({
  labelFor,
  label,
  inputType,
  inputRegister,
  inputStyle,
  placeholder,
}) => {
  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor={labelFor}
      >
        {label}
      </label>
      <input
        type={inputType}
        className={inputStyle}
        placeholder={placeholder}
        {...inputRegister}
      />
    </>
  );
};

export default FormInput;
