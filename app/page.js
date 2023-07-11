"use client";
import Slider from "@/components/Slider";
import Image from "next/image";
import card1 from "../assets/img/verify-page.svg";
import card2 from "../assets/img/card2.svg";
import card3 from "../assets/img/card3.svg";
import iconFacebook from "../assets/img/icon-facebook.svg";
import iconInstagram from "../assets/img/icon-instagram.svg";
import iconTele from "../assets/img/icon-telegram.svg";
import iconTwitter from "../assets/img/icon-twitter.svg";
import iconYoutube from "../assets/img/icon-youtube.svg";

export default function Home() {
  return (
    <main className="bg-violet-50">
      {/** carousel start */}
      <div>
        <Slider />
      </div>
      {/* carousel end */}

      {/*  why sould ohara start*/}
      <div className="bg-violet-50">
        <div className="container mx-auto mt-14 bg-violet-50 ">
          <h1 className="text-center font-bold text-3xl">
            Why Should Ohara Arch
          </h1>
          <div className="flex gap-28 justify-center mt-10">
            <div className="h-64 w-56 rounded-xl shadow-xl my-auto border hover:scale-110 hover:shadow-xl hover:shadow-violet-200 hover:transition-all hover:duration-200">
              <Image
                src={card1}
                className="flex justify-center h-28 mt-4 mb-4"
              ></Image>
              <h3 className="-mt-2 text-center font-bold">Zero To Hero</h3>
              <p className="text-xs px-8 mt-1 text-center">
                Daily assignments, quizzes and final projects help you learn
                from scratch
              </p>
            </div>
            <div className="h-64 w-56 rounded-xl shadow-xl my-auto border hover:scale-110 hover:shadow-xl hover:shadow-violet-200 hover:transition-all hover:duration-200">
              <Image
                src={card2}
                className="flex justify-center h-28 mt-4 mb-4"
              ></Image>
              <h3 className="-mt-2 text-center font-bold">Affordable Cost</h3>
              <p className="text-xs px-8 mt-1 text-center">
                The cost is more affordable so that beginners can start first
              </p>
            </div>
            <div className="h-64 w-56 rounded-xl shadow-xl my-auto border hover:scale-110 hover:shadow-xl hover:shadow-violet-200 hover:transition-all hover:duration-200">
              <Image
                src={card3}
                className="flex justify-center h-28 mt-4 mb-4"
              ></Image>
              <h3 className="-mt-2 text-center font-bold">Full Online</h3>
              <p className="text-xs px-8 mt-1 text-center">
                All learning processes are online so that they can be followed
                anywhere and anytime
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  why sould ohara end*/}

      {/** start*/}
      <div className="w-full bg-svg box-border mt-16">
        <div className="container mx-auto text-center pt-11 pb-11 ">
          <div className="w-36 h-8 bg-violet-400 rounded-md mx-auto flex items-center justify-center mt-2">
            <p className="text-sm text-violet-800">Grow Together</p>
          </div>
          <h1 className="font-bold text-4xl mt-10 text-violet-950">
            Let's start preparing yourself with digital skills now,
            <br /> What are you waiting for?
          </h1>
          <div className="w-36 h-14 border-2 mt-14 mb-8 text-violet-950 border-violet-500 transition-all duration-200 hover:border-0 hover:bg-violet-600 hover:text-violet-50 hover:scale-125 rounded-md mx-auto flex items-center justify-center ">
            <p>See All Course</p>
          </div>
        </div>
      </div>

      {/** end*/}

      <div className="bg-[#a49ce4] pt-28 box-border">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className=" flex justify-between">
              <div>
                <h1 className="font-bold text-7xl text-violet-950">
                  Contact Us
                </h1>
                <p className="text-violet-950 text-xl mt-4 font-semibold" >PT. Going Marry Sejahtera</p>
                <p className="text-violet-950 mt-1">Jl. Sabaody Archipelago No. 8 Grand Line</p>
              </div>
              <div className="w-1/2">
                <div className="flex gap-1">
                  <Image src={iconFacebook} className="h-20"></Image>
                  <Image src={iconInstagram} className="h-20"></Image>
                  <Image src={iconTele} className="h-20"></Image>
                  <Image src={iconTwitter} className="h-20"></Image>
                  <Image src={iconYoutube} className="h-20"></Image>
                </div>
                <div className="mt-4 ml-14">
                  <p className="text-violet-950">Phone &emsp;: 08123456789</p>
                  <p className="text-violet-950 mt-1">Email &emsp;&ensp;: oharaarch@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[300px] mt-28 text-violet-950">
            <div>
              <h2 className="font-semibold text-xl">Programs</h2>
              <p className="mt-4">Ebook</p>
              <p className="mt-2">Online Course</p>
              <p className="mt-2">Online Course</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Information</h2>
              <p className="mt-4">Community</p>
              <p className="mt-2">FAQ</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Ohara Arch</h2>
              <p className="mt-4">About Oahara Arch</p>
              <p className="mt-2">Contact</p>
            </div>
          </div>
          <hr className="border-violet-950 mt-36"/>
          <p className="font-mono text-violet-950 text-center pb-8">©Since 2023.Ohara Arch. Powered By Nico Robin x Jaguar D. Saul. All rights Reserved</p>
        </div>
      </div>
      
    </main>
  );
}
