import React from "react";
import Spinner from "./../components/Spinner";
import Label from "./../components/Label";
import Header from "./../components/header";
import Footer from "./../components/footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-wrapper min-h-screen flex justify-center items-center bg-green-300 font-poppins px-4 py-10">
        <div className="about bg-emerald-100 w-full sm:w-11/12 md:w-4/5 lg:w-3/5 rounded-2xl shadow-2xl p-6 md:p-10 space-y-6">
          <h1 className="text-3xl font-bold text-center text-green-900">
            About This App
          </h1>

          {/* Optional Image */}
          <div className="w-full flex justify-center">
            <img
              src="/logoMeal.png" // replace this with your actual image path
              alt="Ethiopian Food"
              className="rounded-lg shadow-md w-full max-h-80 object-cover"
            />
          </div>

          <div className="text-lg text-justify text-green-800 space-y-4">
            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-green-800">Umer Ahmed</span>,
              an Ethiopian food enthusiast and tech lover. I created this app to
              help people explore and learn about traditional Ethiopian meals
              along with their authentic recipes.
            </p>

            <p>
              Whether you're a food lover, a home cook trying new cuisines, a
              member of the Ethiopian diaspora looking for a taste of home, or a
              traveler curious about Ethiopia’s rich culture, this app is
              designed with you in mind.
            </p>

            <p>
              Ethiopian food is not just about ingredients and recipes; it's a
              cultural expression. With this app, I hope to preserve and share
              that culture with the world—one delicious dish at a time.
            </p>
          </div>

          <p className="text-center text-sm text-green-600 pt-4">
            Built with ❤️ by Umer Ahmed | 2025
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
