import React from "react";

const task = () => {
  return (
    <header className='w-full bg-fixed '>
      <div className=' flex flex-col justify-center items-center px-4' id="task">
        <div className=' max-w-6xl w-full py-16'>
          <div className=''>
            <div className=' border-b-2 sm:border-b-4 w-8 sm:w-16 border-green-600 rounded-lg' />
            <h1 className='text-white text-lg sm:text-4xl'>Task</h1>
          </div>

          <p>Our task is to build three substainable Apps:</p>
          <div className='pt-16'>
            <span className=''>
              <span className='bg-green-200  text-xl text-gray-900 rounded-full p   mr-4 text-center'>
                1 {""}
              </span>
              <span className='text-red-400'> SHE App-</span>{" "}
              <span className='text-white leading-loose text-xs '>
                Safety/Security,Health and Environment App
              </span>
            </span>
          </div>
          <div className='pt-16'>
            <span className=''>
              <span className='bg-green-200 w-32 h-32 text-xl text-gray-900 rounded-full p mr-4'>
                2 {""}
              </span>
              <span className='text-red-400'> Grace App-</span>{" "}
              <span className='text-white leading-loose text-xs '>
                With intentionof getting people closer to God
              </span>
            </span>
          </div>
          <div className='pt-16'>
            <span className=''>
              <span className='bg-green-200 w-32 h-32 text-xl text-gray-900 rounded-full p mr-4'>
                3 {""}
              </span>
              <span className='text-red-400'> Unity App-</span>{" "}
              <span className='text-white leading-loose text-xs '>
                An App to help solve education challenges in Nigeria
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default task;
