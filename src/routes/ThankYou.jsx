import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-green-300 flex items-center justify-center font-poppins px-4 py-10">
        <div className="bg-emerald-100 shadow-xl rounded-2xl p-8 md:p-12 max-w-lg w-full text-center space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-green-800">
            🎉 Thank You!
          </h1>
          <p className="text-green-700 text-lg">
            Your message has been successfully sent. We appreciate your feedback
            and will get back to you soon.
          </p>

          <Link
            to="/"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThankYou;
