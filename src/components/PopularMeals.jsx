import React from 'react'

const PopularMeals = ({meal}) => {
  return (
    <div className="flex flex-col justify-start m-auto p-4 bg-lime-50 font-poppins space-y-7   rounded-lg max-w-90 ">
    <div className=" z-20 w-full rounded-md min-h-60 max-h-190 ">
      <img
        src={meal.src||"/logoMeal.png"}
        className="w-full max-h-60 object-cover hover:scale-101 transiton duration-400 hover:shadow-sm rounded-md "
        alt="meal"
      />
    </div>

    <div className="info  space-y-3 divide-y-1 ">
      <h3 className="font-bold text-lg text-green-900 ">{meal.name}</h3>
      <p className="leading-5  text-green-800">
        {meal.description}
      </p>
    </div>
    </div>
  )
}

export default PopularMeals