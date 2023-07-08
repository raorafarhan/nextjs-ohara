import React from "react";
import Image from "next/image";
import emailIcon from "../assets/img/email-icon.svg";
import verifyPage from "../assets/img/verify-page.svg"

const VerifyPage = () => {
  return (
    <main className="container">
      <div className="flex justify-center mt-20">
        <div className="max-w-sm">
          <h1 className="font-bold text-3xl">Verify your email address</h1>
          <p className="text-sm font-normal mt-2">
            We have send you an <span className="font-semibold">One Time Password(OTP)</span> on this email address.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-5/6 h-14 bg-white flex rounded-lg shadow-md shadow-gray-300">
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
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="hover:shadow-md shadow-purple-300 transition-shadow duration-500 "
            >
              <div className="w-24 h-8 hover:shadow-lg bg-purple-800 transition-shadow duration-500 rounded-lg bg-gradient-to-br from-[#A483EA] to-transparent hover:ring-2 hover:ring-purple-800 hover:ring-inset text-center flex items-center justify-center text-purple-50 font-semibold text-sm">
                Verify
              </div>
            </button>
          </div>
          <div className="relative bottom-24 right-12 -z-[999]">
          <Image src={verifyPage}></Image>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyPage;
