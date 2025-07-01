import React from 'react'

const NavLinks = () => {
  return (
    <ul className="navlinks md:order-2   flex space-x-4 *:text-green-200 *:hover:underline-offset-4 *:hover:underline *:hover:text-green-300 *:font-semibold self-center md:self-center   text-[0.9rem] content-end md:text-base justify-end *:active:text-green-700 max-[500px]:hidden">
      <li>
        {" "}
        <a className="transition-colors duration-300" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="transition-colors duration-300" href="/about">
          About
        </a>
      </li>
      <li>
        <a className="transition-colors duration-300" href="/contact">
          Contact
        </a>
      </li>
      <li>
        <a className="transition-colors duration-300" href="/meals">
          View All Meals
        </a>
      </li>
    </ul>
  );
}

export default NavLinks