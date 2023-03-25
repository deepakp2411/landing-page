import React from "react";
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'


import hero from "../assets/heroImg.png";
const Hero = () => {
  return (
    <div className="bg-white w-full py-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2">
        <div className="flex flex-col justify-start">
          <p className="py-2 text-2xl text-[#20B486] font-bold">
            START TO SUCCESS
          </p>
          <h1 className="py-2 text-5xl font-semibold">
            Access to 5000+ Courses from 3000 Instruction & Institution
          </h1>
          <p className="py-2 text-lg text-gray-900">
            Various versions have evolve
          </p>
          <form className="mx-w-[700px] border border-black p-4 shadow-lg rounded-md">
            <input
              type="text"
              placeholder="Say google..."
              className="bg-white border border-none outline-none"
            />
          </form>
        </div>
        <img src={hero} alt="logo" />
      </div>

      <div className="py-2">
        <div className="flex justify-start flex-col items-center">
          <h3 className="text-2xl font-bold text-[#536E96]">Trusted by over 25,000 teams around the world</h3>
          <p className="py-2 text-[#536E96] text-[16px]"> Leading companies use the same courses to help employees keep their skills fresh</p>
        </div>
        <div className="flex justify-around py-4">
          <img src={one} alt="logo"  className="w-[140px] h-12"/>
          <img src={two} alt="logo"  className="w-[140px] h-12"/>
          <img src={three} alt="logo"  className="w-[140px] h-12"/>
          <img src={four} alt="logo"  className="w-[140px] h-12"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
