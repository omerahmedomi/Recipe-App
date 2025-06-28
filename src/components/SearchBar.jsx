import React from 'react'
import MagnifyingGlass from './MagnifyingGlass';

const SearchBar = () => {
  return (
    <div className="md:w-[30%] flex items-center  self-end   relative order-1  col-span-2 max-[500px]:hidden">
      <input
        type="search"
        className="peer text-green-300 w-full px-4 py-2 rounded-lg border border-green-300 py-1 w-[3/4] focus:outline-none focus:ring-2 text-[13.5px] placeholder-green-200 focus:ring-emerald-400 focus:border-transparent transition duration-200 shadow-sm   appearance-none [&::-webkit-search-cancel-button]:hidden [&::-moz-search-clear-button]:hidden"
        placeholder="Search for meals"
      />
      <button
        type="submit"
        className="absolute right-0 px-3 h-full bg-green-600 border border-green-300 border-l-0 peer-focus:border-transparent hover:bg-green-700 transition focus:bg-green-700
    rounded-r-lg"
      >
        <MagnifyingGlass />
      </button>
    </div>
  );
}

export default SearchBar