import React from 'react'
import Header from '../components/header';
import Footer from './../components/footer';
import ScrollToTop from './../components/ScrollToTop';

const Contact = () => {
  return (
    <>
    <ScrollToTop/>
      <Header />
      <div className="about-wrapper min-h-screen flex justify-center items-center  bg-green-300 font-poppins px-4 py-10">
        <div className="about bg-emerald-100 w-full sm:w-11/12 md:w-4/5 lg:w-3/5  rounded-2xl shadow-2xl p-6 md:p-10 space-y-6">
          <h1 className="text-xl font-bold text-center text-green-900">
            Have a recipe request or feedback? Reach out to us through
          </h1>

          <form
            action="https://formsubmit.co/26ba3a74f950f670c9a9f1a1a29a3424"
            method="POST"
            className="flex flex-col text-green-800 space-y-4"
          >
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/thank-you"
            />
            <div className="flex flex-col justify-start">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="border-2 rounded-md focus:outline-none focus  px-2 py-1 focus:ring-1 ring-offset-0.5 ring-offset-green-200 focus:ring-green-400 placeholder:"
              />
            </div>

            <div className="flex flex-col justify-start Text-green-700">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email"
                className="border-2 rounded-md focus:outline-none focus  px-2 py-1 focus:ring-1 ring-offset-0.5 ring-offset-green-200 focus:ring-green-400 placeholder:"
              />
            </div>

            <div className="flex flex-col flex-wrap justify-start">
              <label htmlFor="message">Message:</label>
              <textarea
                className="w-full p-2 border-2 rounded-md focus:outline-none focus  px-2 py-1 focus:ring-1 ring-offset-0.5 ring-offset-green-200 focus:ring-green-400"
                rows={4}
                placeholder="Type your message here..."
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact