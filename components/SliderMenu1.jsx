import Image from "next/image";
import React from "react";
import ImgSlide1 from "../assets/img/slide1.svg";

const SliderMenu1 = () => {
  return (
    <main className="flex justify-center bg-carousel1">
      <div className="container flex justify-center mb-9 pt-14 h-[40rem]">
        <div className="box-border">
          <Image src={ImgSlide1} className="h-[35rem]"></Image>
        </div>
        <div>
          <h1 className="font-extrabold text-8xl text-violet-200">
            Learning and <br />
            teaching online,
            <br />
            made easy.
          </h1>
          <p className="text-xl mt-4 text-violet-200">
            Gain subject certification or earn money <br />
            while teaching online with GlobalTalk.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <p className="font-bold text-sm text-violet-200">Sign-in</p>
            <div className="flex justify-center">
            <button type="submit" className="hover:shadow-md shadow-purple-300 transition-shadow duration-500 ">
              <div className="w-24 h-6  hover:shadow-lg bg-purple-800 transition-shadow duration-500 rounded-lg bg-gradient-to-br from-[#A483EA] to-transparent hover:ring-2 hover:ring-purple-800 hover:ring-inset text-center flex items-center justify-center text-violet-50 font-semibold text-sm">learn More</div>
            </button>
          </div>
          </div>
        </div>
      </div>
      </main>
  );
};

export default SliderMenu1;
