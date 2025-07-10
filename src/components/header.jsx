import React from 'react'
import HamburgerMenu from './hamburgerMenu';
import { useState ,useEffect} from 'react';
import CancelButton from './CancelButton';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { searchMeal } from '../appwrite';





const Header = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm,setSearchTerm]=useState('')
  const [searchedMeals,setSearchedMeals]=useState([])
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
  console.log(searchTerm);
  useEffect(() => {
    
    const fetchSearch = async () => {
    
      const results = await searchMeal(searchTerm);
      setSearchedMeals(results)
      
    };

    fetchSearch();
  }, [searchTerm]);

  console.log("Searched Meals", searchedMeals);
  return (
    <header
      className=" relative font-poppins md:flex justify-between items-center  text-white p-4 bg-gradient-to-b from-green-700 to-teal-900 h-16 h-28 md:h-auto  
      grid grid-cols-2   max-[500px]:justify-items-start max-[500px]:content-start max-[500px]:h-auto
"
    >
      <Link to="/">
        <div className="logo-wrapper cursor-pointer  flex items-center space-x-2 self-center md:self-center">
          <img
            src="/logoMeal.png"
            alt=""
            className="logo size-8 md:size-9 rounded-full "
          />
          <h1 className="md:text-2xl font-extrabold   text-green-200 text-lg ">
            ETFoodz
          </h1>
        </div>
      </Link>

      {isMenuOpen && (
        <ul className="min-[500px]:hidden absolute top-full right-0 w-full bg-teal-800 z-40 p-4 shadow-lg">
          <ul className="navlinks md:order-2   flex flex-col space-x-4 *:text-green-200 *:hover:underline-offset-4 *:hover:underline *:hover:text-green-300 *:font-semibold self-center md:self-center   text-[0.9rem] content-end md:text-base justify-end *:active:text-green-700 *:py-2 *:hover:bg-green-300 ">
            {" "}
            <a className="transition-colors duration-300" href="/">
              <li> Home</li>
            </a>
            <a className="transition-colors duration-300" href="/about">
              <li> About</li>
            </a>
            <a className="transition-colors duration-300" href="/contact">
              <li>Contact</li>
            </a>
            <a className="transition-colors duration-300" href="/meals">
              <li> ViewMeals</li>
            </a>
          </ul>
        </ul>
      )}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(s) => {
          setSearchTerm(s);
        }}
      />
      <NavLinks />

      <button
        onClick={() => toggleMenu()}
        className=" absolute top-5 text-green-300 hover:text-green-400 right-4 z-50  min-[500px]:hidden"
      >
        {isMenuOpen ? <CancelButton /> : <HamburgerMenu />}
      </button>
      {searchedMeals.length > 0 && (
        <div className="absolute left-1/2 top-full z-50 translate-x-[-50%] mt-2 w-100 sm:w-150 bg-green-100 text-green-800  shadow-lg rounded-md overflow-hidden max-h-60 overflow-y-auto">
          {searchedMeals.map((meal) => (
            <li
              key={meal.$id}
              className="px-4 py-2 hover:bg-lime-100 cursor-pointer list-none"
            >
              <Link to={`/meals/${meal.$id}`} onClick={()=>{
                setSearchTerm('')
              }} state={{meal}}>{meal.name}</Link>
            </li>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;