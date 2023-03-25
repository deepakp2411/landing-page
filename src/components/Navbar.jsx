import React, { useState } from "react";
import logo from "../assets/Practice.svg";
import lock from "../assets/Lock.svg";
import ham from "../assets/menu-burger.png";
import close from "../assets/cross.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] border mx-auto w-full h-full flex justify-between items-center">
        <img src={logo} alt="logo" className="h-[25px]" />

        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex justify-between items-center bg-transparent px-6 gap-2 font-bold">
            <img src={lock} alt="lock" />
            Login
          </button>
          <button className="bg-[#20B486] px-8 py-3 rounded-md text-white font-bold">
            Sign up for free
          </button>
        </div>

        {/* mobile menu  */}
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={toggle ? close : ham}
            alt="ham"
            className="w-6 h-6 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute transition-all duration-300 ease-out z-10 p-4 bg-white w-full md:hidden"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-500 cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
            Home
          </li>
          <li className="p-4 hover:bg-gray-500 cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
            About
          </li>
          <li className="p-4 hover:bg-gray-500 cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
            Support
          </li>
          <li className="p-4 hover:bg-gray-500 cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
            Platform
          </li>
          <li className="p-4 hover:bg-gray-500 cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
            Pricing
          </li>

          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 font-bold py-4 hover:bg-[#20B486] hover:text-white transition-all duration-500 ease-out">
              <img src={lock} alt="lock" />
              Login
            </button>
            <button className="bg-[#20B486] px-8 py-3 rounded-md text-white font-bold hover:border hover:bg-gray-200 transition-all duration-500 ease-in-out hover:text-black">
              Sign up for free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
