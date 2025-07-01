import React, { useState } from "react";
import { meals } from "../Meals";
import MealCard from "../components/MealCard";
import Header from "../components/header";
import Footer from "../components/footer";

const Meals = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="category-filters flex flex-col items-center bg-green-300 accent-teal-400 font-poppins">
        <h1 className="text-center p-4 text-lg text-green-900 font-semibold">Categories</h1>
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
      <div className="  bg-green-300 flex-grow">
        {filteredMeals.length > 0 ? (
          <div className="  grid grid-cols-1 min-[825px]:grid-cols-2 min-[1190px]:grid-cols-3 p-10 gap-y-8">
            {filteredMeals.map((meal, index) => (
              <MealCard
                key={index}
                src={meal.src}
                title={meal.title}
                desc={meal.description}
                id={meal.id}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-9 font-poppins">
            <h1 className="text-lg md:text-xl text-green-900">No Meals to display!</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Meals;
