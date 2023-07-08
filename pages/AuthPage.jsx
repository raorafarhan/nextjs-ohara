import React from "react";


const AuthPage = () => {
  return (
    <main className="container">
      <div className="flex justify-center mt-20">
        <div className="w-xl">
          <h1 className="font-bold text-3xl text-center">OTP Verification</h1>
          <p className="text-sm font-normal mt-2 text-center">
            Enter the code from your email
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="w-10 h-10 bg-white flex rounded-md shadow-md shadow-gray-300">
              <input type="text" className="max-w-full text-center border border-gray-300 rounded-md font-bold text-xl outline-none focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-purple-500 focus:shadow-md focus:shadow-purple-500" maxLength={1}  />
            </div>
            <div className="w-10 h-10 bg-white flex rounded-md shadow-md shadow-gray-300">
              <input type="text" className="max-w-full text-center border border-gray-300 rounded-md font-bold text-xl outline-none focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-purple-500 focus:shadow-md focus:shadow-purple-500" maxLength={1}  />
            </div>
            <div className="w-10 h-10 bg-white flex rounded-md shadow-md shadow-gray-300">
              <input type="text" className="max-w-full text-center border border-gray-300 rounded-md font-bold text-xl outline-none focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-purple-500 focus:shadow-md focus:shadow-purple-500" maxLength={1}  />
            </div>
            <div className="w-10 h-10 bg-white flex rounded-md shadow-md shadow-gray-300">
              <input type="text" className="max-w-full text-center border border-gray-300 rounded-md font-bold text-xl outline-none focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-purple-500 focus:shadow-md focus:shadow-purple-500" maxLength={1}  />
            </div>
            <div className="w-10 h-10 bg-white flex rounded-md shadow-md shadow-gray-300">
              <input type="text" className="max-w-full text-center border border-gray-300 rounded-md font-bold text-xl outline-none focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-purple-500 focus:shadow-md focus:shadow-purple-500" maxLength={1}  />
            </div>
            <div className="w-10 h-10 bg-white flex rounded-md shadow-md shadow-gray-300">
              <input type="text" className="max-w-full text-center border border-gray-300 rounded-md font-bold text-xl outline-none focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-purple-500 focus:shadow-md focus:shadow-purple-500" maxLength={1}  />
            </div>
          </div>
          <p className="text-sm font-normal mt-2 text-center text-gray-300 pt-2">I didn't receive any code. RESEND</p>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="hover:shadow-md shadow-purple-300 transition-shadow duration-500 "
            >
              <div className="w-24 h-8 hover:shadow-lg bg-purple-800 transition-shadow duration-500 rounded-lg bg-gradient-to-br from-[#A483EA] to-transparent hover:ring-2 hover:ring-purple-800 hover:ring-inset text-center flex items-center justify-center text-purple-50 font-semibold text-sm">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
