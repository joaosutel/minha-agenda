import React from "react";

export default function ListTableBody({ children }) {
  return (
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      {children}
    </tbody>
  );
}
