import React from 'react'


const header = () => {
  return (
   <header className='flex justify-between items-center bg-linear-to-r from-green-600 to-green-500 text-white p-4'>
    <div className="logo-wrapper flex items-center space-x-2">
        <img src="" alt="" className="logo size-10 rounded-full" />
        <h1 className="text-2xl poppins-extrabold  font-poppins text-white">ETFoodz</h1>
    </div>
    <div className='w-[30%]'>
      <input type="search" className='border-2 border-green-200  rounded-3xl px-4 py-1 focus:outline-none focus:outline-offset-none focus:ring-2 focus:ring-green-700 w-[100%]' placeholder='Search for meals' />
    </div>
    <ul className="navlinks pl-4 flex space-x-4 *:text-green-800 *:hover:underline-offset-4 *:hover:underline *:hover:text-green-900 *:font-semibold font-poppins">
     <li > <a href="">Home</a></li>
     <li><a href="">About</a></li>
     <li><a href="">Contact</a></li>
     <li><a href="">Login/Signup</a></li>
    </ul>
   </header>
  )
}

export default header