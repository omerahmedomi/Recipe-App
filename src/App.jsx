import React from 'react'
import Header  from './components/header'
import Footer from './components/footer'
import  CarouselComponent  from './components/CarouselComponent'





const App = () => {
  return (
    <>
      <Header />
      <div
        className="flex flex-col min-[500px]:flex-row justify-center items-center bg-gradient-to-r from-emerald-500 to-green-400
"
      >
        <div className="hero-img flex-1 order-2  bg-[url(/smk.png)] bg-no-repeat bg-cover  min-[500px]:order-0  items-start  justify-center ">
          <img className="" src="./HeroTibs.png" alt="" />
        </div>
        <div className=" flex-1 order-1 font-poppins flex flex-col  justify-center min-[500px]:self-start min-[750x]:self-center min-[500px]:py-20 min-[750px]:py-40 items-start min-[750px]:items-end">
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
      <Footer />
    </>
  );
}

export default App