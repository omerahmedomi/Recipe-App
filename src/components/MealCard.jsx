
import React from "react";
import ArrowTopRight from "./ArrowTopRight";
import { Link} from 'react-router-dom';
import { getImageURL } from "../appwrite";
const MealCard = ({meal}) => {
  console.log("meal.src value:", meal.src);
  const imageURL = getImageURL(meal.src);
  console.log("Final image URL:", imageURL);


  return (
    <div className="flex flex-col justify-start items-start p-4 bg-green-100  space-y-7 shadow-lg  rounded-lg max-w-90">
      <div className=" z-20 w-full rounded-md min-h-60 max-h-190 ">
        <img
          src={getImageURL(meal.src)||'/logoMeal.png'}
          className="w-full h-60 object-cover hover:scale-101 transiton duration-400 shadow-lg hover:shadow-lg rounded-md "
          alt={meal.name}
          loading="eager"
        />
      </div>

      <div className="info  space-y-3 flex-grow ">
        <h3 className="font-bold text-lg text-green-900 ">{meal.name}</h3>
        <p className="leading-5 font-semibold text-green-800">
          {meal.description}
        </p>
      </div>
      <div className="  flex gap-4 text-sm font-semibold sm:text-base self-center  ">
        <Link to={`/meals/${meal.$id}/`} state={{ meal }}>
          <button
            className="group bg-emerald-400 px-4 py-2 flex gap-2 rounded-lg text-green-900 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:bg-green-400 transition  cursor-pointer  
        "
            // onClick={() => {
            //   window.location.href = `/meals/${meal.$id}/`;
            // }}
          >
            Read More{" "}
            <span className="group-hover:translate-x-0.5 transition duration-300">
              <ArrowTopRight />
            </span>
          </button>
        </Link>
        <Link to={`/meals/${meal.$id}/recipe`} state={{ meal }}>
          <button
            className="group bg-lime-200 px-4 py-2 flex gap-2 rounded-lg text-teal-800 focus:outline-none focus:ring-2 focus:ring-lime-400 hover:bg-lime-300 transition duration-500 cursor-pointer"
            // onClick={() => (window.location.href = `/meals/${id}/recipe`)}
          >
            View Recipe{" "}
            <span className="group-hover:translate-x-0.5 transition duration-300">
              <ArrowTopRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MealCard;
