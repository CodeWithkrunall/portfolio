import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full px-[12%] py-10 scroll-mt-20 "
    >
      <h4 className="text-center text-xl mb-2 font-ovo ">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex flex-col lg:flex-row gap-20 my-20 items-center">
        <div className="w-64 rounded-3xl sm:w-80 max-w-none">
          <Image
            src={assets.user_image}
            alt=" "
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl ">
        {infoList.map(({icon,iconDark,title,description},index)=>(

          <li key={index} className="border-[0.5] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black">
            <Image src={icon} alt="" className="w-7 mt-3"/>
            <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </li>
          
        ))}
        </ul>
       
        </div>
      </div>
    </div>
  );
};

export default About;
