import React from 'react'
import Tag from './Tag';

const Label = ({category}) => {
  return (
    <div className="rounded-4xl gap-1 inline-flex pr-2 pl-1 pt-0.5 font-poppins  bg-lime-100">
      <span className='text-green-800'>
       
        <Tag />
      </span> 
     
      {category}
    </div>
  );
}

export default Label