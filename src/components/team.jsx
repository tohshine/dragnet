import React from "react";

const team = () => {
  return (
    <div className='pt-16 pb-20'>
      <div className='flex flex-col justify-center items-center'>
        <div className=' border-l-4 pl-2 border-green-500  items-center'>
          <p className='text-orange-600'>MEET OUR</p>
          <p className='text-gray-900'>TEAM MEMBERS</p>
        </div>

        <div className=' max-w-6xl'>
          <div className='flex flex-col sm:flex-row justify-center items-center px-4 sm:px-16  sm:px-40 pt-8'>
            <img
              src='../../team.jpg'
              alt=''
              className=' sm:w-32 sm:h-32 w-16 h-16 mb-4 rounded-full '
            />

            <p className=' leading-loose font-serif sm:pl-4'>
              <sub className='sm:text-6xl text-3xl text-gray-400 '>"</sub> Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              nesciunt, earum dolorum quisquam ullam quaerat iste doloribus
              temporibus ut? Vitae nobis perferendis maiores, aperiam quod fuga
              corrupti. Impedit, eaque perspiciatis?
              <sub className='sm:text-6xl text-3xl text-gray-400'>"</sub>
            </p>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center px-4 sm:px-16  sm:px-40 pt-8'>
            <img
              src='../../team.jpg'
              alt=''
              className=' sm:w-32 sm:h-32 w-16 h-16 mb-4 rounded-full '
            />

            <p className=' leading-loose font-serif sm:pl-4'>
              <sub className='sm:text-6xl text-3xl text-gray-400 '>"</sub> Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              nesciunt, earum dolorum quisquam ullam quaerat iste doloribus
              temporibus ut? Vitae nobis perferendis maiores, aperiam quod fuga
              corrupti. Impedit, eaque perspiciatis?
              <sub className='sm:text-6xl text-3xl text-gray-400'>"</sub>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default team;
