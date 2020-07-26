import React from "react";

const contact = () => {
  return (
    <div className='w-full bg-gray-900 py-16 px-4'>
      <div className=' flex flex-col justify-center items-center'>
        <div className=' max-w-6xl w-full'>
          <div className=' border-b-2 sm:border-b-4 w-8 sm:w-16 border-green-600 rounded-lg' />
          <h1 className='text-lg sm:text-4xl'>Contact us</h1>
          <div className=' flex flex-col pt-4  tracking-wider'>
            <i className='fas fa-globe-africa text-blue-500 text-lg pb-4'>
              <span className='text-white pl-4 text-sm'>
                www.dragnetdigitalservices.com
              </span>
            </i>
            <i className='fab fa-instagram text-red-500 text-lg pb-4'>
              <span className='text-white pl-4 text-sm'>
                @dragnetdigital
              </span>
            </i>
            <i className='fab fa-facebook text-blue-500 text-lg pb-4 '>
              <span className='text-white pl-4 text-sm tracking-wide'>
                @dragnetdigital
              </span>
            </i>
            <i className='fas fa-phone text-blue-500 text-lg pb-4'>
              <span className='text-white pl-4 text-sm '>+2349015630233</span>
            </i> 
            <i className='fab fa-twitter text-blue-500 text-lg pb-4'>
              <span className='text-white pl-4 text-sm '>@dragnetservices</span>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
