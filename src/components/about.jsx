import React from "react";

const About = () => {
  return (
    <div className='w-full px-4 pt-4 sm:pt-32 ' id="about">
      <div className='flex flex-col justify-center items-center'>
        <div className=' max-w-6xl w-full '>
          <div className=' border-b-2 sm:border-b-4 w-8 sm:w-16 border-green-600 rounded-lg' />
          <h1 className='text-gray-900 text-lg sm:text-4xl'>About</h1>
          <div className='grid-2  sm:pt-8'>
            <div
              className=' w-full  rounded-lg'
              style={{
                backgroundImage: "url('../organo.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              
              }}
            ></div>

            <p className='sm:pr-32 text-sm sm:text-lg leading-loose rellax' data-rellax-speed="1" data-rellax-xs-speed="0">
              Dragnet Digital Services is a software company that harness modern
              technology to maximize profits with a formidable organizational
              system.This Services was born out of passion to empower lives by
              solving the problem of ignorance and the best tool to reach the
              world is technology. and as a growing brand we render business
              services by building website, Apps and community building by
              organizing digital training seminars.
            </p>
          </div>

          <section className='pt-16 sm:pt-32'>
            <h1 className='text-gray-900 text-sm text-center'>
             Our Goals
            </h1>
            <div className='pt-16'>
              <div className='grid-3'>
                <div className='shadow-lg bg-white rounded-lg ronded-lg border-0 rellax' data-rellax-speed="1" data-rellax-xs-speed="0">
                  <div className='pt-8 w-full h-64 rounded-t-lg rounded-t-lg'style={{backgroundImage:"url(../../ideas.jpg)",backgroundPosition: "center",
                backgroundSize: "cover",}}></div>
                  <div className="p">
                  <h1 className='text-green-700 pt-8 font-bold text-lg'>Vision</h1>
                  <p className='pt-8 text-sm '>
                    Our vision is to build software to improve lives.
                  </p>
                  </div>
                </div>
                 <div className='shadow-lg bg-white rounded-lg ronded-lg border-0 rellax' data-rellax-speed="2" data-rellax-xs-speed="0">
                  <div className='pt-8 w-full h-64 rounded-t-lg'style={{backgroundImage:"url(../../mission.jpg)",backgroundPosition: "center",
                backgroundSize: "cover",}}></div>
                  <div className="p">
                  <h1 className='text-green-700 pt-8 font-bold text-lg'>Mission</h1>
                  <p className='pt-8 text-sm '>
                    Our Mission is to use technology to solve the world challenges.
                  </p>
                  </div>
                </div>
                 <div className='shadow-lg bg-white rounded-lg ronded-lg border-0 rellax' data-rellax-speed="3" data-rellax-xs-speed="0">
                  <div className='pt-8 w-full h-64 rounded-t-lg'style={{backgroundImage:"url(../../team.jpg)",backgroundPosition: "center",
                backgroundSize: "cover",}}></div>
                  <div className="p">
                  <h1 className='text-green-700 pt-8 font-bold text-lg'>Commitment</h1>
                  <p className='pt-8 text-sm '>
                    Our Commitment is our integrity in building communities through innovation
                  </p>
                  </div>
                </div>
              
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
