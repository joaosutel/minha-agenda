export const capitalize = (text) => {
  if (!text) return;
  const values = text.split(" ");
  const newValues = values.map(
    (value) => value[0].toUpperCase() + value.substring(1).toLowerCase()
  );

  return newValues.join(" ");
};
