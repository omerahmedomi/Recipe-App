import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import Check from './../components/Check';
// flex flex-col items-start
// w-9/10 sm-w-full md:w-4/5
// justify-self-start grid grid-cols-3 
// min-[400px]:grid-cols-4
// sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-5
const Recipe = () => {
  return (
    <>
      <Header />
      <div className="  bg-green-300 font-poppins ">
        <h1 className="underline underline-offset-6 text-center pt-10 text-lg sm:2xl lg:text-2xl  text-green-800 font-semibold">
          Recipe for Shiro Wot
        </h1>
        <div className="top-level-wrapper md:flex md:flex-row p-5 gap-4 min-[480px]:w-4/5 m-auto  md:w-[100%] lg:w-9/10 ">
          <div className="bg-pink-200  h-55 min-[600px]:h-70 min-[700px]:h-80 md:flex-1 rounded-lg">
            <img
              src="/logoMeal.png"
              alt=""
              className="max-w-full w-full max-h-full object-cover rounded-lg"
            />
          </div>
          <div className="ingredients flex-1 flex flex-col items-center  md:mt-0 mt-7 md:mb-0 pt-2 md:pt-0">
            <h1 className="font-semibold text-lg text-green-800">
              {" "}
              Ingredients
            </h1>
            <ul className=" self-start *:px-4 *:py-2 grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-0 sm:gap-x-5 ">
              <li>
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
              </li>
              <li>afdfddfd</li>
              <li>afdfddfd</li>
              <li>afdfddfd</li>
              <li>afdfddfd</li>
              <li>afdfddfd</li>
              <li>afdfddfd</li>
              <li>afdfddfd</li>
              <li>afdfddfdllllllllllllllllllll</li>
              <li>afdfddfdllllllllllllllllllll</li>
            </ul>
          </div>
        </div>
        <div className="instructions p-2">
          <h1 className="text-center p-4 text-green-800 font-semibold ">
            Step by Step Instructions
          </h1>
          <ol className="*:even:bg-green-200 *:px-4 *:py-2 md:w-3/4 mx-auto w-9/10 *:odd:bg-green-400 list-decimal pb-6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipe;
