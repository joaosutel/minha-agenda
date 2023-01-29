import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdSearch, MdClear } from "react-icons/md";

export default function Search({ findProduct, clearFilter }) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {}, [searchText]);

  return (
    <div className="flex items-center justify-center bg-white appearance-none rounded-lg border border-gray-200 shadow-sm p-1 left-2 mx-5 mt-5 min-w-[30%] sm:max-w-screen-sm text-stone-900">
      <input
        type="text"
        className="appearance-none px-4 py-1 w-full text-slate-500"
        placeholder="Search by product name..."
        value={searchText}
        onChange={(e) => {
          const textToFind = e.target.value;
          setSearchText(textToFind);
          findProduct(textToFind);
        }}
      />
      {!searchText ? (
        <MdSearch className="px-2 bg-white text-3xl text-slate-500" />
      ) : (
        <MdClear
          className="px-2 text-3xl text-slate-500 cursor-pointer"
          onClick={() => {
            clearFilter();
            setSearchText("");
          }}
        />
      )}
    </div>
  );
}
