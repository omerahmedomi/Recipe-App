import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopularMeals from "./../components/PopularMeals";
import topEthiopianMeals from "../PopularMeals";
import ScrollToTop from './../components/ScrollToTop';
import SearchBar from './../components/SearchBar';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1085 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1085, min: 730 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 730, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const App = ({deviceType}) => {

  
  return (
    <>
      <Header />
      <div
        className="flex flex-col min-[500px]:flex-row justify-center items-center bg-gradient-to-r from-emerald-300 to-green-200
"
      >
        <div className="hero-img flex-1 order-2  bg-[url(/smk.png)] bg-no-repeat bg-cover  min-[500px]:order-0  items-start  justify-center ">
          <img
            className="hover:scale-105 transition-all duration-400 "
            src="./HeroTibs.png"
            alt=""
            loading="eager"
          />
        </div>
        <div className=" flex-1 order-1 font-poppins px-1.5 flex flex-col  justify-center min-[500px]:self-start min-[750x]:self-center min-[500px]:py-20 min-[750px]:py-40 items-start min-[750px]:items-end">
          
          <h2 className="font-extrabold text-5xl mt-8 text-green-950 min-[680px]:text-6xl  min-[860px]:text-7xl ">
            <span className="bg-gradient-to-r from-green-950 via-emerald-850 to-emerald-800 bg-clip-text text-transparent">
              Explore
            </span>{" "}
            Ethiopian Meals
          </h2>

          <p className="font-bold text-2xl mt-5 min-[680px]:text-3xl  min-[860px]:text-4xl text-green-800">
            Get the recipe and start cooking your favourite cuisine
          </p>
        </div>
      </div>

      <div className="popular-dishes  bg-emerald-100 p-3 pb-10 sm:pb-15 md:pb-20 lg:pb-22  ">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="pt-10 font-poppins text-4xl font-semibold  text-lime-600 sm:text-5xl  ">
            Popular Dishes
          </h1>
          <p className="mt-3 text-lg text-lime-700 leading-5 sm:text-xl font-poppins p-2  mb-10">
            Have a quick view of some of the well-known meals in Ethiopia
          </p>
        </div>
        <div className="">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={7000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            minimumTouchDrag={25}
          >
            {topEthiopianMeals.map((meal, index) => (
              <PopularMeals key={index} meal={meal} />
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
