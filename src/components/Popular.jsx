import React from "react";
import saly from "../assets/saly.png";

const Popular = () => {
  return (
    <div className="bg-[#E9F8F3B2] w-full py-28">
      <div className="mx-auto max-w-[1440px] ">
        <div className="flex flex-col justify-start">
          <h1 className="py-2 text-5xl font-bold">Most Popular <span className="text-[#20B486]">Courses</span></h1>
          <p className="">
            {" "}
            Various versions have evolved over the years, sometimes by accident
          </p>
        </div>

        <div className="flex justify-start pt-8 gap-10">
            <div>
                <img src={saly} alt="lgo" />
                <p>Various versions have evolved daf</p>
                <span>$ 500 </span>
            </div>
            <div>
                <img src={saly} alt="lgo" />
                <p>Various versions have evolved daf</p>
                <span>$ 500 </span>
            </div>
            <div>
                <img src={saly} alt="lgo" />
                <p>Various versions have evolved daf</p>
                <span>$ 500 </span>
            </div>
            <div>
                <img src={saly} alt="lgo" />
                <p>Various versions have evolved daf</p>
                <span>$ 500 </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
