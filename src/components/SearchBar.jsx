import React from "react";
import MagnifyingGlass from "./MagnifyingGlass";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="md:w-[30%] flex items-center  self-end    max-[500px]:mt-2 relative order-1  col-span-2 max-[500px]:mx-auto">
      <input
        type="search"
        className="peer text-green-300 w-full px-8 py-2 rounded-3xl border border-green-300 py-1 w-[3/4] focus:outline-none focus:ring-2 text-[13.5px] placeholder-green-200 focus:ring-emerald-400 focus:border-transparent transition duration-200 shadow-sm   appearance-none [&::-webkit-search-cancel-button]:hidden [&::-moz-search-clear-button]:hidden "
        placeholder="Search for meals "
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <span className="absolute left-2">
        <MagnifyingGlass />
      </span>
    </div>
  );
};

export default SearchBar;
