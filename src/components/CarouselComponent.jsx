import { Carousel } from "flowbite-react";
import MealCard from './MealCard';
// h-86 sm:h-104 md:h-114 lg:h-124 xl:h-134 2xl:h-144 w-[80%] lg:w-1/2 mt-5 sm:mt-10 *:bg-black-100  text-left overflow-hidden
export default function Component() {
  return (
    <div className=" w-90 text-left rounded-xl overflow-hidden">
      <Carousel indicators={false} slideInterval={10000}
      
      >
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        {/* <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          className="w-full h-full object-cover "
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
          className="w-full h-full object-cover "
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
          className="w-full h-full object-cover "
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
          className="w-full h-full object-cover "
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
          className="w-full h-full object-cover "
        /> */}
      </Carousel>
    </div>
  );
}
