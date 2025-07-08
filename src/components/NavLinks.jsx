import React from 'react'
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="navlinks md:order-2   flex space-x-4 *:text-green-200 *:hover:underline-offset-4 *:hover:underline *:hover:text-green-300 *:font-semibold self-center md:self-center   text-[0.9rem] content-end md:text-base justify-end *:active:text-green-700 max-[500px]:hidden">
      <li>
        {" "}
        <Link className="transition-colors duration-300"to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="transition-colors duration-300"to={"/about"}>
          About
        </Link>
      </li>
      <li>
        <Link className="transition-colors duration-300"to={"/contact"}>
          Contact
        </Link>
      </li>
      <li>
        <Link className="transition-colors duration-300"to={"/meals"}>
          ViewMeals
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks