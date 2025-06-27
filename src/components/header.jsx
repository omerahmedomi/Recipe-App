import React from 'react'
import MagnifyingGlass from './MagnifyingGlass';


const header = () => {
  return (
    <header
      className="font-poppins flex justify-between items-center text-white p-4 bg-gradient-to-b from-green-700 to-teal-900
"
    >
      <div className="logo-wrapper flex items-center space-x-2">
        <img src="" alt="" className="logo size-10 rounded-full" />
        <h1 className="text-2xl font-extrabold   text-green-200">ETFoodz</h1>
      </div>
      <div className="w-[30%] flex items-center relative">
        <input
          type="search"
          className="peer text-green-300 w-full px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 placeholder-green-200 focus:ring-emerald-400 focus:border-transparent transition duration-200 shadow-sm   appearance-none [&::-webkit-search-cancel-button]:hidden [&::-moz-search-clear-button]:hidden"
          placeholder="Search for meals"
        />
        <button
          type="submit"
          className="absolute right-0 px-3 h-full bg-green-600 border border-green-300 border-l-0 peer-focus:border-transparent 
        rounded-r-lg "
        >
          <MagnifyingGlass />
        </button>
      </div>
      <ul className="navlinks  pr-5 flex space-x-4 *:text-green-200 *:hover:underline-offset-4 *:hover:underline *:hover:text-green-300 *:font-semibold">
        <li>
          {" "}
          <a className="transition-colors duration-300" href="">
            Home
          </a>
        </li>
        <li>
          <a className="transition-colors duration-300" href="">
            About
          </a>
        </li>
        <li>
          <a className="transition-colors duration-300" href="">
            Contact
          </a>
        </li>
        <li>
          <a className="transition-colors duration-300" href="">
            Login/Signup
          </a>
        </li>
      </ul>
    </header>
  );
}

export default header