import React from 'react'
import HamburgerMenu from './hamburgerMenu';
import { useState ,useEffect} from 'react';
import CancelButton from './CancelButton';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import MagnifyingGlass from './MagnifyingGlass';




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu=()=>{
    setIsMenuOpen((prev)=>!prev)
  }
  useEffect(() => {
    // Set initial state based on current window size
    if (window.innerWidth > 500) {
      setIsMenuOpen(false);
    }

    const handleResize = () => {
      if (window.innerWidth > 500) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header
      className=" relative font-poppins md:flex justify-between items-center  text-white p-4 bg-gradient-to-b from-green-700 to-teal-900 h-16 h-28 md:h-auto  
      grid grid-cols-2   max-[500px]:justify-items-start max-[500px]:content-start max-[500px]:h-auto
"
    >
      <div className="logo-wrapper  flex items-center space-x-2 self-center md:self-center">
        <img src="./logoMeal.png" alt="" className="logo size-8 md:size-9 rounded-full " />
        <h1 className="md:text-2xl font-extrabold   text-green-200 text-lg ">
          ETFoodz
        </h1>
      </div>
      {isMenuOpen && (
        <ul className="min-[500px]:hidden absolute top-full right-0 w-full bg-teal-800 z-40 p-4 shadow-lg">
          <li>
            <div className="md:w-[30%] flex items-center  self-end   relative order-1  col-span-2 ">
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
          </li>
          <ul className="navlinks md:order-2   flex flex-col space-x-4 *:text-green-200 *:hover:underline-offset-4 *:hover:underline *:hover:text-green-300 *:font-semibold self-center md:self-center   text-[0.9rem] content-end md:text-base justify-end *:active:text-green-700 *:py-2 *:hover:bg-green-300 ">
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
        </ul>
      )}
      <SearchBar />
      <NavLinks />

      <button
        onClick={() => toggleMenu()}
        className=" absolute top-5 text-green-300 hover:text-green-400 right-4 z-50  min-[500px]:hidden"
      >
        {isMenuOpen ? <CancelButton /> : <HamburgerMenu />}
      </button>
    </header>
  );
}

export default Header;