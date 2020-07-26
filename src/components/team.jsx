import React, { useState } from "react";
import TeamList from "./teamlists";
import { profile } from "../utils/mocks";
const Team = () => {
  const [count, setcount] = useState(0);

  const moveLeft = () => {
    if (count === 0) return setcount(0);
    setcount(count-1)
  };
  const moveRight = () => {
    if (profile.length === count + 1) return setcount(0);
    setcount(count + 1);
  };
  
  return (
    <header className=' pb-20 w-full  bg-fixed'>
      <div className='flex flex-col justify-center items-center '>
        <div className='   items-center sm:text-lg pt-8'>
         <div className="border-l-4 pl-2 border-green-500">
         <p className='text-orange-600'>MEET OUR</p>
          <p className='text-white'>TEAM MEMBERS</p>
         </div>
        </div>

        <div className=' max-w-6xl w-full'>
          <div className=' text-right text-lg text-gray-600'>
            <i
              className='fa fa-arrow-left pr-4 cursor-pointer '
              onClick={moveLeft}
              aria-hidden='true'
            ></i>
            <i
              className='fa fa-arrow-right cursor-pointer'
              onClick={moveRight}
              aria-hidden='true'
            ></i>
          </div>
        
          <TeamList count={count} />
        
         
        </div>
      </div>
    </header>
  );
};

export default Team;
