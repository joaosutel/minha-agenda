import React from "react";

const TableControls = ({ values, callback }) => {
  return (
    <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
      <span className="text-xs xs:text-sm text-gray-900">
        Showing {values.minIndex + 1} to {values.maxIndex + 1} of{" "}
        {values.entries} Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
          onClick={() => callback("first")}
        >
          First
        </button>
        <button
          className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4"
          onClick={() => callback("prev")}
        >
          Prev
        </button>
        <div className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4">
          {values.actualPage}
        </div>
        <button
          className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4"
          onClick={() => callback("next")}
        >
          Next
        </button>
        <button
          className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
          onClick={() => callback("last")}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default TableControls;
