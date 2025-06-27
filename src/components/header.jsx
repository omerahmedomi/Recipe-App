import React from 'react'

const header = () => {
  return (
   <header className='flex justify-between items-center bg-linear-to-r from-green-600 to-green-300 text-white p-4'>
    <div className="logo-wrapper flex items-center space-x-2">
        <img src="" alt="" className="logo size-10 rounded-full" />
        <h1 className="text-2xl poppins-extrabold">ETFoodz</h1>
    </div>
    <div>
      <input type="search" className='border-2 rounded-3xl px-4 py-1 focus:border' placeholder='Search for meals' />
    </div>
    <ul className="navlinks flex space-x-4">
     <li > <a href="">Home</a></li>
     <li><a href="">About</a></li>
     <li><a href="">Contact</a></li>
     <li><a href="">Services</a></li>
    </ul>
   </header>
  )
}

export default header