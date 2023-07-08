import React from "react";
import Image from "next/image";
import pageImg from "../assets/img/sign-up-page.svg";


const CreateAccount = () => {
  return (
    <main className="container">
      <div className="box-border flex justify-center">
        <div className="max-w-4xl">
          <div className="box-border">
            <Image src={pageImg} className="scale-75" alt="ilustration"></Image>
          </div>
        </div>
        <div>
          <div className=" flex-wrap mt-20">
            <h1 className="font-bold text-3xl max-w-xs">Create Your Account</h1>
            <div></div>
            <p className="font-normal text-base text-gray-800 max-w-[21rem] mt-2">
              Please enter the credentials first. <br />
              Won’t be shared publicly. <br />
              Won’t be spammed.
            </p>
          </div>
          <div className="mt-8">
            <div className="w-full h-12 bg-white flex rounded-lg shadow-md shadow-gray-300">
              <div className="w-full flex ml-4 justify-center">
                <input
                  type="text"
                  placeholder="your name"
                  className="w-full pr-4 font-semibold text-sm text-black focus:outline-none placeholder:text-gray-500 placeholder:font-normal placeholder:text-sm "
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="w-full h-12 bg-white flex rounded-lg shadow-md shadow-gray-300">
              <div className="w-full flex ml-4 justify-center">
                <input
                  type="password"
                  placeholder="password"
                  className=" w-full pr-4 font-semibold text-sm text-black focus:outline-none placeholder:text-gray-500 placeholder:font-normal placeholder:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="hover:shadow-md shadow-purple-300 transition-shadow duration-500 "
            >
              <div className="w-24 h-8 hover:shadow-lg bg-purple-800 transition-shadow duration-500 rounded-lg bg-gradient-to-br from-[#A483EA] to-transparent hover:ring-2 hover:ring-purple-800 hover:ring-inset text-center flex items-center justify-center text-purple-50 font-semibold text-sm">
                Sign Up
              </div>
            </button>
          </div>
          <p className="text-xs flex justify-center text-gray-500 mt-2">
          Already have account?
            <a href="#" className="font-semibold ml-[2px]">
            Login here
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;
