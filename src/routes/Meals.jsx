import React, { useState, useEffect } from "react";
import MealCard from "../components/MealCard";
import Header from "../components/header";
import Footer from "../components/footer";
import {getMeals,getCategories} from "../appwrite";
import Spinner from "./../components/Spinner";
import ScrollToTop from './../components/ScrollToTop';
import '../assets/Meals.css'
import LeftArrow from './../components/LeftArrow';
import RightArrow from "../components/RightArrow";


const Meals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 6; 

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const loadMeals = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const meals = await getMeals();
      const categories = await getCategories();
      setMeals(meals);
      setCategories(categories);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log("useEffect called");
    loadMeals();
  }, []);
  console.log(meals);
  console.log(categories);
  console.log("Selected categories", selectedCategories);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
    setCurrentPage(1);
  };
  const filteredMeals = meals.filter((meal) =>
    selectedCategories.length === 0
      ? true
      : selectedCategories.every((cat) => meal.categories.includes(cat))
  );


  const totalPages = Math.ceil(filteredMeals.length / mealsPerPage);
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = filteredMeals.slice(indexOfFirstMeal, indexOfLastMeal);

  return (
    <div className="min-h-screen flex flex-col ">
      <ScrollToTop />
      <Header />
      <div className="category-filters flex flex-col items-center bg-green-200 accent-teal-400 font-poppins j">
        <h1 className="text-center p-4 text-lg text-green-900 font-semibold">
          Categories
        </h1>
        
        <div
          id="categories"
          className="grid grid-cols-4 justify-center gap-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8  text-green-800   "
        >
          {categories.map((cat) => (
            <label key={cat.name} className="">
              <input
                type="checkbox"
                value={cat.name}
                checked={selectedCategories.includes(cat.name)}
                onChange={handleCategoryChange}
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>
      <div className="  bg-green-200 flex-grow flex flex-col items-center ">
        {isloading ? (
          <p className="flex justify-center items-center mt-5 space-x-2">
            <span className="font-extralight text-lg text-green-900">
              Fetching Meals
            </span>{" "}
            <Spinner />
          </p>
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : filteredMeals.length > 0 ? (
          <div className="  grid grid-cols-1 min-[825px]:grid-cols-2 min-[1190px]:grid-cols-3 p-10 gap-y-8 gap-x-8 2xl:gap-20">
            {currentMeals.map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-9 font-poppins">
            <h1 className="text-lg md:text-xl text-green-900">
              No Meals to display!
            </h1>
          </div>
        )}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-6 mb-8 text-green-900 font-semibold text-sm font-poppins sm:text-base">
            <button
              onClick={() => {
                window.scrollTo(0, 0),
                  setCurrentPage((p) => Math.max(p - 1, 1));
              }}
              disabled={currentPage === 1}
              className="  text-green-800 font-extralight rounded hover:font-extrabold transition disabled:opacity-50 cursor-pointer"
            >
              <LeftArrow />
            </button>

            <span>
              <span className="text-lg">Page</span> {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => {
                window.scrollTo(0, 0),
                  setCurrentPage((p) => Math.min(p + 1, totalPages));
              }}
              disabled={currentPage === totalPages}
              className="text-green-800 font-extralight rounded hover:font-extrabold transition disabled:opacity-50 cursor-pointer"
            >
              <RightArrow />
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Meals;
