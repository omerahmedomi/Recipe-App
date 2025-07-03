import React from "react";
import ArrowTopRight from "../components/ArrowTopRight";
import Header from "../components/header";
import Footer from "../components/footer";
import meals from "../Meals";
import { useParams } from "react-router-dom";
// float-left mr-4 mb-4
const Meal_Info = () => {
  const param = useParams();
  const mealToDisplay = meals.find((meal) => meal.id === param.meal_id);
  return (
    <>
      <Header />
      <div
        className="bg-gradient-to-br from-green-400 to-green-300

 p-8 font-poppins    "
      >
        <div className="info-and-image-wrapper flex flex-col justify-center items-center sm:block ">
          <div
            className="image-wrapper bg-pink-300 
        w-full h-60 sm:h-62 md:h-63 sm:float-left sm:mr-4 sm:mb- sm:w-[45%] sm:self-start min-w-[65%] md:min-w-[60%] 
        lg:min-w-[40%] rounded-md"
          >
            <img
              src="/logoMeal.png"
              alt=""
              className="w-full max-w-full max-h-full object-cover rounded-md hover:scale-101 tranistion duration-300 hover:shadow-md"
            />
          </div>
          <div className="information mt-9 sm:mt-auto text-green-900 ">
            <h1 className="title font-semibold text-lg ">
              {mealToDisplay.name}
            </h1>
            <p className="info mt-4 sm:mt-2 sm:leading-7 text-justify ">
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              ipsa dicta deserunt ratione esse, libero porro repellendus numquam
              tempora. Nobis quos, earum totam deleniti ullam consequatur
              nesciunt error? Sed, sit? Adipisci assumenda maxime, in reiciendis
              natus aliquid accusantium sequi consectetur veritatis voluptatem
              eum harum? Corrupti quasi quos ex blanditiis mollitia, unde,
              deleniti qui velit sed pariatur porro omnis cupiditate
              consequatur. Optio deleniti, veritatis nihil saepe quis minima
              asperiores libero adipisci nam corporis! Assumenda amet eos
              facere, nam officia eum? Ab distinctio inventore voluptatem maxime
              quod pariatur atque saepe officiis natus. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Optio quod eum magnam, unde
              temporibus tenetur dolore, laudantium tempore nobis ad incidunt
              vel iste. Vero sit, dolor neque quae asperiores natus. */}
              {mealToDisplay.longDescription}
            </p>
          </div>
        </div>

        <div className="nutritional-facts clear-left mt-10 min-[700px]:pt-5">
          <h1 className="font-semibold text-green-900 text-center   ">
            Nutritional Facts
          </h1>
          <ul className=" mt-7  border-l-6 *:p-2  border-green-600 text-green-800 flex flex-col md:w-2/3 mx-auto ">
            {/* <li
              className="even:bg-lime-200 
          odd:bg-green-300"
            >
              Lorem ipsum, dolor
            </li>
            <li className="even:bg-green-200 odd:bg-green-300">b</li>
            <li className="even:bg-green-200 odd:bg-green-300">c</li> */}
            {mealToDisplay.nutritionalFacts.map((fact) => (
              <li
                className="even:bg-green-200 
          odd:bg-green-300"
              >{fact}</li>
            ))}
          </ul>
        </div>
        <div className="categories mt-4 px-2 text-lg border-l-5 border-green-700 bg-green-200 clear-left text-lime-800 md:w-2/3 mx-auto">
          Categories:
        </div>
        <div className="recipe-button flex justify-center items-center mt-8">
          <button
            className="group bg-lime-200 px-4 py-2 flex gap-2 rounded-lg text-teal-800 focus:outline-none focus:ring-2 focus:ring-lime-400 hover:bg-lime-300 transition duration-500 cursor-pointer
        "
            onClick={() =>
              (window.location.href = `/meals/${param.meal_id}/recipe`)
            }
          >
            View Recipe{" "}
            <span className="group-hover:translate-x-0.5 transition duration-300">
              <ArrowTopRight />
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Meal_Info;
