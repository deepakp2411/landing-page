import React from "react";
import achi from "../assets/ach.png";
import video from "../assets/GraduationCap.png";
import camera from "../assets/VideoCamera.png";
import three from "../assets/UsersThree.png";

const Achievement = () => {
  return (
    <div className="bg-white h-[80vh] w-full min-h-screen flex justify-around items-center">
      <div className="flex ">
        <div className="flex justify-center gap-36">
          <div className="">
            <h1 className="font-bold text-5xl">
              Our <span className="text-[#20B486]">Achievement</span>{" "}
            </h1>
            <p className="py-2">
              {" "}
              Various versions have evolved over the years, sometimes by
              accident
            </p>

            <div className="grid grid-cols-2 gap-3 py-28">
              <div className="flex items-center gap-4 ">
                <img src={three} alt="logo" />
                <div className="">
                  <h6 className="font-bold">3000+</h6>
                  <p className="text-gray-600">Teacher</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={camera} alt="logo" />
                <div className="">
                  <h6 className="font-bold">9000+</h6>
                  <p className="text-gray-600">Teacher</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={camera} alt="logo" />
                <div className="">
                  <h6 className="font-bold">300</h6>
                  <p className="text-gray-600">Teacher</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={video} alt="logo" />
                <div className="">
                  <h6 className="font-bold">300</h6>
                  <p className="text-gray-600">Teacher</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-[300px] bg-orange-400 rounded-xl flex justify-">
            <img src={achi} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
