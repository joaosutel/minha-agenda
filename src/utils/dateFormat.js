export const isoDateToDdMmYyyyDate = (date) =>
  date.split("-").reverse().join("/");
