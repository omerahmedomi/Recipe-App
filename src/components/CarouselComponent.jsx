import { Carousel } from "flowbite-react";

export default function Component() {
  return (
    <div className="h-86 sm:h-104 md:h-114 lg:h-124 xl:h-134 2xl:h-144 w-3/4 lg:w-1/2 mt-5 sm:mt-10 bg-amber-200 ">
      <Carousel >
        <img
         
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..." 
          className="w-full h-full object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..." 
          className="w-full h-full object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..." 
          className="w-full h-full object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..." 
          className="w-full h-full object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..." 
          className="w-full h-full object-cover"
        />
      </Carousel>
    </div>
  );
}
