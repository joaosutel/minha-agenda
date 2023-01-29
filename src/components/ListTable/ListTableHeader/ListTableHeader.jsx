import React from "react";

export default function ListTableHeader({ headers }) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {headers &&
          headers.map((header, index) => {
            return (
              <th
                key={index}
                scope="col"
                className={`px-6 py-4 text-lg text-gray-900 ${
                  index === 0 ? "text-left" : "text-center"
                }`}
              >
                {header}
              </th>
            );
          })}
      </tr>
    </thead>
  );
}
