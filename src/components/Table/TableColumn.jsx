import React from "react";
import TableData from "./TableData";

const TableColumn = ({ children }) => {
  return (
    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
      <TableData>{children}</TableData>
    </td>
  );
};

export default TableColumn;
