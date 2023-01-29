import React from "react";
import { BsChevronDown, BsSearch, BsX } from "react-icons/bs";

const PageActions = ({
  entriesLimit,
  pageConfig,
  search,
  searchValue,
  clientStatus,
  callback,
}) => {
  return (
    <div className="flex sm:flex-row flex-col">
      <div className="flex flex-row mb-1 sm:mb-0">
        <div className="relative">
          <select
            className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            defaultValue={pageConfig.pageSize}
            onChange={(e) => callback(+e.target.value)}
          >
            {entriesLimit.map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <BsChevronDown className="fill-current h-3 w-3" />
          </div>
        </div>
        <div className="relative">
          <select className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
            {clientStatus.map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <BsChevronDown className="fill-current h-3 w-3" />
          </div>
        </div>
      </div>
      <div className="block relative w-[30em] min-w-[20em]">
        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
          <BsSearch className="h-4 w-4 fill-current text-gray-500" />
        </span>
        <input
          placeholder="Search"
          value={searchValue}
          className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block px-8 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          onChange={(e) => search(e.target.value.trim())}
        />
        <span className="h-full absolute inset-y-0 right-0 flex items-center pr-2">
          <BsX
            className="h-4 w-4 fill-current text-gray-500 cursor-pointer"
            onClick={() => search("")}
          />
        </span>
      </div>
    </div>
  );
};

export default PageActions;
