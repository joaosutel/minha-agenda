import React from "react";

const FormButton = ({
  formName,
  bgColor,
  textColor,
  value,
  type,
  label,
  onClick,
}) => {
  return (
    <button
      form={formName}
      type={type}
      className={`h-10 text-md font-medium ${textColor} ${bgColor} rounded-md w-[130px] !m-0`}
      value={value}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FormButton;
