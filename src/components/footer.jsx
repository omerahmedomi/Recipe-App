import React from 'react'

const footer = () => {
  return (
    <div className="bg-emerald-600 font-poppins p-10 pb-2 flex flex-col justify-end items-center">
      <ul className="navlinks   flex space-x-4 *:text-lime-200 *:hover:underline-offset-4 *:hover:underline *:hover:text-green-300   *:active:text-green-700 text-base">
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
      <h1 className="text-lime-100 mt-10 ">Made by Umer</h1>
      <p className="text-lime-100 text-sm ">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </div>
  );
}

export default footer