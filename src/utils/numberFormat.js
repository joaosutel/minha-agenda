export const convertNumberToCurrency = (
  value,
  numberFormat = "pt-BR",
  currencyFormat = "BRL"
) => {
  if (!value) {
    return value;
  }

  return new Intl.NumberFormat(numberFormat, {
    style: "currency",
    currency: currencyFormat.toUpperCase(),
  }).format(value);
};

export const convertCurrencyToNumber = (
  value,
  decimal = ",",
  separator = "."
) => {
  if (!value) {
    return value;
  }

  return +value
    .toString()
    .replace(/[^\d.,-]/g, "")
    .replace(separator, "")
    .replace(decimal, ".");
};

export const formatNumber = (
  value,
  format = "en",
  minIntDigits = 1,
  minFractDigits = 2
) => {
  return new Intl.NumberFormat(format, {
    minimumIntegerDigits: minIntDigits,
    minimumFractionDigits: minFractDigits,
  }).format(value);
};
