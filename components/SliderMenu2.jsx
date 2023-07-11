import Image from "next/image";
import React from "react";
import ImgSlide2 from "../assets/img/login-page.svg";

const SliderMenu2 = () => {
  return (
    <main className="flex justify-center">
      <div className="container flex justify-center bg-gray-300 mb-9 pt-14 h-[40rem]">
        <div className="mt-8">
          <h1 className="font-extrabold text-6xl text-right">
          Master Digital Skills <br />Achieve Your Success
          </h1>
          <p className="text-xl mt-4 text-right">
            Gain subject certification or earn money <br />
            while teaching online with GlobalTalk.
          </p>
          <div className="flex justify-end items-center gap-4 mt-4">
            <p className="font-bold text-sm">Sign-in</p>
            <div className="flex justify-center">
            <button type="submit" className="hover:shadow-md shadow-purple-300 transition-shadow duration-500 ">
              <div className="w-24 h-6 hover:shadow-lg bg-purple-800 transition-shadow duration-500 rounded-lg bg-gradient-to-br from-[#A483EA] to-transparent hover:ring-2 hover:ring-purple-800 hover:ring-inset text-center flex items-center justify-center text-purple-50 font-semibold text-sm">learn More</div>
            </button>
          </div>
          </div>
        </div>
        <div className="box-border ml-40">
          <Image src={ImgSlide2}></Image>
        </div>
      </div>
      </main>
  )
}

export default SliderMenu2