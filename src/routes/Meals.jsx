import React, { useState, useEffect } from "react";
// import { meals } from "../Meals";
import MealCard from "../components/MealCard";
import Header from "../components/header";
import Footer from "../components/footer";
import getMeals from "../appwrite";
import Spinner from "./../components/Spinner";

const Meals = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const loadMeals = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const meals = await getMeals();
      setMeals(meals);
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
  console.log(meals)

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };
  const filteredMeals = meals.filter((meal) =>
    selectedCategories.length === 0
      ? true
      : selectedCategories.every((cat) => meal.categories.includes(cat))
  );

  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <div className="category-filters flex flex-col items-center bg-green-300 accent-teal-400 font-poppins">
        <h1 className="text-center p-4 text-lg text-green-900 font-semibold">
          Categories
        </h1>
        <div className="grid grid-cols-4 items-center space-x-2 sm:space-x-10 md:space-x-15 lg:space-x-20 text-green-800">
          {[
            "breakfast",
            "lunch",
            "dinner",
            "vegan",
            "meat",
            "fasting",
            "holiday",
          ].map((cat) => (
            <label key={cat} className="">
              <input
                type="checkbox"
                value={cat}
                checked={selectedCategories.includes(cat)}
                onChange={handleCategoryChange}
              />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div className="  bg-green-300 flex-grow flex flex-col items-center ">
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
          <div className="  grid grid-cols-1 min-[825px]:grid-cols-2 min-[1190px]:grid-cols-3 p-10 gap-y-8 gap-x-8">
            {filteredMeals.map((meal, index) => (
              <MealCard
                key={index}
                meal={meal}
                
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-9 font-poppins">
            <h1 className="text-lg md:text-xl text-green-900">
              No Meals to display!
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Meals;
