import React from "react";

import { profile } from "../../utils/mocks";

const Teamlists = ({ count }) => {
  const { name, image, description,profession } = profile[count];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='grid-2 w-full ml-2'>
        <div
          className=' w-full rounded-lg '
          data-aos='fade-right'
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
            width:"100%",
            objectFit:"contain"
          }}
        >
          <div
            className='w-full relative '
           
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", height: "70vh" }}
          >
            <p className='text-2xl text-white pb-8 absolute pl-2 bottom-0 sm:hidden'>
              {name}
            </p>
             <p className='text-sm text-white  absolute pl-2 bottom-0 sm:hidden'>
              {profession}
            </p>
          </div>
        </div>
        <div className=' hidden sm:block'>
          <p className='leading-loose text-gray-400 sm:text-xl  ' data-aos='fade-left'>
            {description}
          </p>
          <p className='pt-8 text-white sm:text-4xl'>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Teamlists;
