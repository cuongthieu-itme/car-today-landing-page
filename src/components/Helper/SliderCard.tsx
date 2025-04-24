import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  image: string;
  role: string;
};

const SliderCard = ({ image, name, role }: Props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10">
      <div className="h-full w-full">
        <Image
          width={350}
          alt="image"
          src={image ?? "/default-image.jpg"}
          height={350}
          className="w-full h-full"
        />
      </div>
      <div className="mt-6 mb-7">
            <div className="flex items-center">
                <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600"/>
                <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600"/>
                <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600"/>
                <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600"/>
                <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600"/>
            </div>
            <p className="mt-6 text-gray-800 w-[80%] text-xs md:text-sm lg:text-base font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium doloribus possimus repudiandae perspiciatis suscipit excepturi sint illo rerum reiciendis, iste hic recusandae harum consequuntur.</p>
            <div className="mt-7">
                <h1 className="text-xl text-black font-semibold">{name}</h1>
                <p className="text-lg text-black text-opacity-60">{role}</p>
            </div>
      </div>
    </div>
  );
};

export default SliderCard;
