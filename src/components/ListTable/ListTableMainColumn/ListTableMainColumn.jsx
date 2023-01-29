import React from "react";

export default function ListTableMainColumn({
  iconSrc,
  iconAlt,
  mainText,
  subText,
}) {
  return (
    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
      <div className="relative h-10 w-10">
        <img src={iconSrc} alt={iconAlt} />
      </div>
      <div className="text-sm">
        <div className="font-medium text-gray-700">{mainText}</div>
        <div className="text-gray-400">{subText}</div>
      </div>
    </th>
  );
}
