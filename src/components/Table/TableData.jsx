import React from "react";

const TableData = ({ icon, children }) => {
  return (
    <div className="flex items-center">
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 text-4xl text-gray-400">
          {icon}
        </div>
      )}
      <div className="ml-3">
        <div className="text-gray-900 whitespace-no-wrap">{children}</div>
      </div>
    </div>
  );
};

export default TableData;
