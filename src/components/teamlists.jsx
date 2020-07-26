import React, { useState } from "react";

import { profile } from "../utils/mocks";

const Teamlists = ({ count }) => {
  const { name, image, description } = profile[count];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='grid-2 w-full ml-2'>
        <div
          className=' w-full rounded-lg '
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
           
          }}
          
        >
            <div className="w-full relative " style={{ backgroundColor: "rgba(0, 0, 0, 0.5)",height:"70vh"}}>
            <p className='text-2xl text-white  absolute pl-2 bottom-0 sm:hidden'>{name}</p>
            </div>
        </div>
        <div className=' hidden sm:block'>
          <p className='leading-loose text-gray-400 sm:text-xl '>
            {description}
          </p>
          <p className='pt-8 text-white sm:text-4xl'>{name}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Teamlists;
