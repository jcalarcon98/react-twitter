import React from "react";
import ReactLogo from "../../assets/twitter.svg";
import "./LoginPage.css";

export const LoginPage = () => {

  return (
    <div className="w-full flex flex-col-reverse h-screen md:flex-row bg-black">
      {/* Image */}
      <div
        className="w-full bg-cover h-full md:w-custom"
        style={{
          backgroundImage:
            "url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png)",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <img src={ReactLogo} alt="React Logo" className="w-60 md:w-96" />
        </div>
      </div>

      <div className="flex flex-col p-8 justify-between my-4 sm:px-32 md:justify-center md:px-10">
        <img src={ReactLogo} alt="React Logo" className="w-10 mb-10" />

        <h1 className="text-custom text-gray-300  tracking-wide leading-tight font-bold mb-10 sm:text-7xl">
          Happening now
        </h1>
        <h2 className="text-2xl font-bold text-gray-300 tracking-wider w-full mb-4">
          Join Twitter today.
        </h2>
        <div className="flex flex-col sm:flex-row md:flex-col">
          <button className="bg-custom-twitter w-full text-white font-bold p-3 rounded-3xl mb-4 sm:w-1/2 sm:mb-0 sm:mr-4 md:w-3/4 md:mb-4">
            Sign up
          </button>
          <button className="bg-transparent text-custom-twitter w-full border-2 border-custom-twitter font-bold p-3 rounded-3xl sm:w-1/2 md:w-3/4">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
