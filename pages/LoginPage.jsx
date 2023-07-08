import React from "react";
import Image from "next/image";
import pageImg from "../assets/img/login-page.svg";
import emailIcon from "../assets/img/email-icon.svg";
import passwordIcon from "../assets/img/password-icon.svg";

const LoginPage = () => {
  return (
    <main className="container">
      <div className="box-border flex justify-center">
        <div className="max-w-4xl">
          <div className="box-border">
            <Image src={pageImg} className="scale-90" alt="ilustration"></Image>
          </div>
        </div>
        <div>
          <div className=" flex-wrap mt-20">
            <h1 className="font-bold text-3xl max-w-xs">
              Login To Your <span className="text-purple-800">Ohara</span> Arch
              Account
            </h1>
            <p className="font-normal text-base max-w-[21rem] mt-2">
              To keep connected with us please login by{" "}
              <span className="font-semibold">email address</span> and{" "}
              <span className="font-semibold">password</span>
            </p>
          </div>
          <div className="mt-8">
            <div className="w-full h-14 bg-white flex rounded-lg shadow-md shadow-gray-300">
              <div className="flex justify-center items-center">
                <Image
                  src={emailIcon}
                  width={25}
                  className="mx-4 opacity-50"
                ></Image>
              </div>
              <div className="w-full">
                <p className="text-gray-500 text-xs my-1">Email</p>
                <input
                  type="email"
                  placeholder="Input your email"
                  className="w-full pr-4 font-semibold text-sm text-black focus:outline-none placeholder:text-gray-500 placeholder:font-normal placeholder:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full h-14 bg-white flex rounded-lg shadow-md shadow-gray-300">
              <div className="flex justify-center items-center">
                <Image
                  src={passwordIcon}
                  width={25}
                  className="mx-4 opacity-50"
                ></Image>
              </div>
              <div className="w-full">
                <p className="text-gray-500 text-xs my-1">Password</p>
                <input
                  type="password"
                  placeholder="Input your password"
                  className=" w-full pr-4 font-semibold text-sm text-black focus:outline-none placeholder:text-gray-500 placeholder:font-normal placeholder:text-sm"
                />
              </div>
            </div>
          </div>
          <p className="text-xs pt-2 flex justify-end text-gray-500 underline">
            Forgot Password
          </p>
          <div className="mt-6 flex justify-center">
            <button type="submit" className="hover:shadow-md shadow-purple-300 transition-shadow duration-500 ">
              <div className="w-24 h-8 hover:shadow-lg bg-purple-800 transition-shadow duration-500 rounded-lg bg-gradient-to-br from-[#A483EA] to-transparent hover:ring-2 hover:ring-purple-800 hover:ring-inset text-center flex items-center justify-center text-purple-50 font-semibold text-sm">Login</div>
            </button>
          </div>
          <p className="text-xs flex justify-center text-gray-500 mt-2">Don’t have an account? <a href="#" className="font-semibold ml-[2px]">Sign up here</a></p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
