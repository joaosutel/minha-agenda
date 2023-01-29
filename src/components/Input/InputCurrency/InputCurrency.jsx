import React from "react";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";
import { convertCurrencyToNumber } from "../../../utils/numberFormat";

export default function InputCurrency({
  id,
  label,
  placeholder,
  value,
  required,
  callback,
}) {
  const defaultMaskOptions = {
    prefix: "R$ ",
    suffix: "",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false,
  };
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return (
    <div className="mb-6 text-left">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <MaskedInput
        mask={currencyMask}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        id={id}
        value={value}
        required={required}
        onBlur={(e) => {
          callback(convertCurrencyToNumber(e.target.value));
        }}
      />
    </div>
  );
}
