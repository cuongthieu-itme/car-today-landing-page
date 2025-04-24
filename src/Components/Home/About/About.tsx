import React from "react";
import { FaArrowRight, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* first part */}
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-black font-semibold">
              Guaranteed and Certified
            </h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">
            Online learning wherever and whenever
          </h1>
          <p className="mt-4 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus officiis molestias mollitia, et deserunt accusamus
            totam. Beatae quis deleniti minus aliquam aliquid, error provident
            in?
          </p>
          <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white">
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </div>

        {/* second part */}
        <div>
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold text-gray-300">
              01
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl mb-3 text-black/70 font-bold">
                Flexible Schedule
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
                excepturi.
              </p>
            </div>
          </div>
          <div className="mt-8 w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-gray-300">
              02
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl mb-3 text-black/70 font-bold">
                Flexible Schedule
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
                excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
