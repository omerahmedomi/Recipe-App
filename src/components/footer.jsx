import React from 'react'
import  {Link} from 'react-router-dom';

const footer = () => {
  return (
    <div className="bg-emerald-600 font-poppins p-10 pb-2 flex flex-col justify-end items-center">
      <ul className="navLinks   flex space-x-4 *:text-lime-200 *:hover:underline-offset-4 *:hover:underline *:hover:text-green-300   *:active:text-green-700 text-base">
        <li>
          {" "}
          <a className="transition-colors duration-300" href="/">
            Home
          </a>
        </li>
        <li>
          <Link className="transition-colors duration-300" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="transition-colors duration-300" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="transition-colors duration-300" to="/signup">
            Login/Signup
          </Link>
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