import React from 'react'
import { Link } from 'react-router-dom'

const ErrorElement = () => {
  return (
    <div className="bg-teal-900 h-screen   text-center pt-30 font-poppins">
      <p className="text-lg bg-teal-700 text-teal-200 rounded-md p-1 inline">
        Oops! Page Not Found
      </p>
      <h2 className="text-2xl mt-2 text-teal-100">
        The Page you're looking for doesn't exist
      </h2>
      <Link
      to={'/'}
      >
        {" "}
        <span className='underline underline-offset-2 text-green-200'>Back to home</span>
      </Link>
    </div>
  );
}

export default ErrorElement