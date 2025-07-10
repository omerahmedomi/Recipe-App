import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import Check from './../components/Check';

import {useLocation } from "react-router-dom";
import ScrollToTop from './../components/ScrollToTop';
import { getImageURL } from "../appwrite";

const Recipe = () => {
  
  const { state } = useLocation();
  const meal = state?.meal;

  
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className=" bg-gradient-to-b from-emerald-200 to-green-100 font-poppins ">
        <h1 className="underline underline-offset-6 text-center pt-10 text-lg sm:2xl lg:text-2xl  text-green-800 font-semibold">
          Recipe for {meal.name}
        </h1>
        <div className="top-level-wrapper md:flex md:flex-row p-5 gap-4 min-[480px]:w-4/5 m-auto  md:w-[100%] lg:w-9/10 ">
          <div className="bg-pink-200 md:self-center h-55 min-[600px]:h-70 min-[700px]:h-80 md:flex-1 rounded-lg">
            <img
              src={getImageURL(meal.src) || "/logoMeal.png"}
              alt=""
              className="max-w-full w-full max-h-full object-cover rounded-lg hover:scale-101 tranistion duration-300 shadow-xl hover:shadow-2xl"
            />
          </div>
          <div className="ingredients flex-1 flex flex-col items-center   md:mt-0 mt-7 md:mb-0 pt-2 md:pt-0">
            <h1 className="font-semibold text-lg text-green-800">
              {" "}
              Ingredients(Serves {meal.serves})
            </h1>
            <ul className=" self-start *:px-4 *:py-2 grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-0 sm:gap-x-5  ">
              {meal.ingredients.map((ingredient) => (
                <li>
                  <span className="inline-flex text-green-900 pr-1">
                    {" "}
                    <Check />
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="instructions p-2">
          <h1 className="text-center p-4 text-green-800 font-semibold ">
            Step by Step Instructions
          </h1>
          <ol className="*:even:bg-green-200 *:px-4 *:py-2  sm:w-9/10 md:w-4/5 lg:7/10 mx-auto w-[93%] *:odd:bg-green-400 list-decimal pb-6">
            {meal.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipe;
