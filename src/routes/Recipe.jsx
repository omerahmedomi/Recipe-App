import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import Check from './../components/Check';

import { useParams,useLocation } from "react-router-dom";
import ScrollToTop from './../components/ScrollToTop';

const Recipe = () => {
  // const { meal_id } = useParams();
  const { state } = useLocation();
  const meal = state?.meal;

  
  return (
    <>
    <ScrollToTop/>
      <Header />
      <div className="  bg-green-300 font-poppins ">
        <h1 className="underline underline-offset-6 text-center pt-10 text-lg sm:2xl lg:text-2xl  text-green-800 font-semibold">
          Recipe for {meal.name}
        </h1>
        <div className="top-level-wrapper md:flex md:flex-row p-5 gap-4 min-[480px]:w-4/5 m-auto  md:w-[100%] lg:w-9/10 ">
          <div className="bg-pink-200  h-55 min-[600px]:h-70 min-[700px]:h-80 md:flex-1 rounded-lg">
            <img
              src="/logoMeal.png"
              alt=""
              className="max-w-full w-full max-h-full object-cover rounded-lg"
            />
          </div>
          <div className="ingredients flex-1 flex flex-col items-center   md:mt-0 mt-7 md:mb-0 pt-2 md:pt-0">
            <h1 className="font-semibold text-lg text-green-800">
              {" "}
              Ingredients
            </h1>
            <ul className=" self-start *:px-4 *:py-2 grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-0 sm:gap-x-5  ">
              {/* <li>
                <span className="inline-flex text-green-900 pr-1">
                  {" "}
                  <Check />
                </span>
                afdfddfdjjjjjjjjjjjjjjj
              </li>
              <li>
                <span className="inline-flex text-green-900 pr-1">
                  {" "}
                  <Check />
                </span>
                dfhsifjdskfjisjfi
              </li>
              <li className="">
                <span className="inline-flex text-green-900 pr-1">
                  {" "}
                  <Check />
                </span>
                afdfddfd
              </li> */}
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
          <ol className="*:even:bg-green-200 *:px-4 *:py-2 sm:w-3/4 md:w-120 lg:w-150 mx-auto w-9/10 *:odd:bg-green-400 list-decimal pb-6">
            {meal.instructions.map((instruction)=><li>{instruction}</li>)}
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipe;
