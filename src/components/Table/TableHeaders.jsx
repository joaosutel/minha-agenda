import React, { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

const TableHeaders = ({ headers }) => {
  const { state } = useContext(ClientContext);

  return (
    <thead>
      <tr>
        {state.tableHeaders.map((item, index) => (
          <th
            key={index}
            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-bold text-gray-600 uppercase tracking-wider"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeaders;
