import React from 'react'
// import MagnifyingGlass from './MagnifyingGlass';
import HamburgerMenu from './hamburgerMenu';
import { useState ,useEffect} from 'react';
import CancelButton from './CancelButton';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';



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
        <img src="" alt="" className="logo size-8 md:size-9 rounded-full " />
        <h1 className="md:text-2xl font-extrabold   text-green-200 text-lg ">
          ETFoodz
        </h1>
      </div>
      {isMenuOpen && (
        <ul className="min-[500px]:hidden absolute top-full right-0 w-full bg-teal-800 z-40 p-4 shadow-lg">
          <li>x</li>
          <li>Y</li>
          <li>Z</li>
          <li>W</li>
        </ul>
      )}
      <SearchBar/>
      <NavLinks/>
     
     

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