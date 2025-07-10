import React from "react";
import ArrowTopRight from "../components/ArrowTopRight";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link, useLocation} from "react-router-dom";
import ScrollToTop from './../components/ScrollToTop';
import Label from "../components/Label";
import { getImageURL } from "../appwrite";


const Meal_Info = () => {

 
  const { state } = useLocation();
  const meal = state?.meal; // Get the meal directly from navigation state
 
 
  return (
    <>
      <ScrollToTop />
      <Header />

      <div
        className="bg-gradient-to-b from-emerald-200 to-green-100

 p-8 font-poppins    "
      >
        <div className="info-and-image-wrapper flex flex-col justify-center items-center sm:block ">
          <div
            className="image-wrapper 
        w-full h-60 sm:h-62 md:h-63 sm:float-left sm:mr-4 sm:mb- sm:w-[45%] sm:self-start min-w-[65%] md:min-w-[60%] 
        lg:min-w-[40%] rounded-md"
          >
            <img
              src={getImageURL(meal.src)||"/logoMeal.png"}
              alt=""
              className="w-full max-w-full max-h-full object-cover rounded-md hover:scale-101 tranistion duration-300 shadow-xl hover:shadow-2xl "
            />
          </div>
          <div className="information mt-9 sm:mt-auto text-green-900 ">
            <h1 className="title font-semibold text-lg ">{meal.name}</h1>
            <p className="info mt-4 sm:mt-2 sm:leading-7 text-justify ">
              
              {meal.longDescription}
            </p>
          </div>
        </div>

        <div className="nutritional-facts clear-left mt-10 min-[700px]:pt-5">
          <h1 className="font-semibold text-green-900 text-center   ">
            Nutritional Facts(per serving,~{meal.per})
          </h1>
          <ul className=" mt-7  border-l-6 *:p-2  border-green-600 text-green-800 flex flex-col w-80 mx-auto ">
           
            {meal.nutritional_facts.map((fact) => (
              <li
                className="even:bg-green-200 
          odd:bg-green-300"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <div className="categories-wrappper flex jusify-center items-center ">
          <div className="categories mt-4 p-1  text-lg border-l-5 border-green-700 bg-green-200 clear-left text-lime-800    inline-flex  mx-auto flew-wrap items-center  gap-4 flex-wrap gap-y-0 ">
            <h1>Categories: </h1>
            
              {meal.categories.map((cat, index) => (
                <p>
                  <Label category={cat} key={index} />
                </p>
              ))}
           
          </div>
        </div>

        <div className="recipe-button flex justify-center items-center mt-8">
          <Link to={`/meals/${meal.$id}/recipe`} state={{ meal }}>
            <button
              className="group bg-lime-100 shadow-2xl px-4 py-2 flex gap-2 rounded-lg text-teal-800 focus:outline-none focus:ring-2 focus:ring-lime-400 hover:bg-lime-200 transition duration-500 cursor-pointer
        "
              
            >
              View Recipe{" "}
              <span className="group-hover:translate-x-0.5 transition duration-300">
                <ArrowTopRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Meal_Info;
