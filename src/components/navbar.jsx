import React from "react";

const navbar = () => {
    const image1 = "https://res.cloudinary.com/dlecos9op/image/upload/c_scale,w_1400/v1595582127/oac8clvu98zjtnqu3rfc.jpg"
    const image2 = "https://res.cloudinary.com/dlecos9op/image/upload/c_scale,w_1400/v1595584346/o6twf1spuytxhrnwamzc.jpg"
   return (
    <header className='w-full bg-fixed '>
      <div className='flex justify-between text-white pt-4 px-4'>
        <div className=''>
          <div className=' border-b-2 sm:border-b-4 w-8 sm:w-16 border-green-600 rounded-lg' />
          <h1 className='text-xl font-bold sm:text-2xl'>Dragnet Digital</h1>
        </div>

        <ul className=''>
          <a
            className=' text-xs sm:text-lg font-bold pr-2 sm:pr-16 hover:text-orange-600 '
            href='#about'
          >
            about
          </a>
          <a
            className=' text-xs sm:text-lg font-bold pr-2 sm:pr-16 hover:text-orange-600 '
            href='#task'
          >
            task
          </a>
          <a
            className=' text-xs sm:text-lg font-bold  hover:text-orange-600 '
            href='#contact'
          >
            contact
          </a>
        </ul>
      </div>

      <section className=' flex flex-col justify-center items-center pt-20 px-4 sm:pt-32'>
        <div className='  max-w-6xl w-full  '>
          
          <div className="text-center ">
          <h1 className='text-2xl sm:text-5xl text-white rellax' data-rellax-speed="10">
            Dragnet Digital Services
          </h1>
          <p className=" leading-loose text-white text-xs sm:text-sm pt-2 rellax " data-rellax-speed="5">
          Building software to improve lives with the aim of harnessing technology in human capacity development.
          </p>
          </div>
       
        </div>
      </section>
    </header>
  );
};

export default navbar;
