import Image from "next/image";
import React from "react";
import ImgSlide3 from "../assets/img/slide3.svg";

const SliderMenu3 = () => {
  return (
    <main className="flex justify-center">
      <div className="container flex justify-center bg-gray-300 mb-9 pt-14 h-[40rem]">
        <div className="box-border mr-24">
          <Image src={ImgSlide3} className="scale-110 mt-8"></Image>
        </div>
        <div>
          <h1 className="font-extrabold text-6xl mt-8">
          Be Whatever You Want!
          </h1>
          <p className="text-xl mt-4">
            Gain subject certification or earn money <br />
            while teaching online with GlobalTalk.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <p className="font-bold text-sm">Sign-in</p>
            <div className="flex justify-center">
            <button type="submit" className="hover:shadow-md shadow-purple-300 transition-shadow duration-500 ">
              <div className="w-24 h-6 hover:shadow-lg bg-purple-800 transition-shadow duration-500 rounded-lg bg-gradient-to-br from-[#A483EA] to-transparent hover:ring-2 hover:ring-purple-800 hover:ring-inset text-center flex items-center justify-center text-purple-50 font-semibold text-sm">learn More</div>
            </button>
          </div>
          </div>
        </div>
      </div>
      </main>
  )
}

export default SliderMenu3