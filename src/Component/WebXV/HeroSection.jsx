import React from "react";
import { NavLink } from "react-router";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 bg-[#0B0E12] text-white h-screen lg:text-start">
      <div className="lg:col-span-6 col-span-12 flex flex-col pt-24 lg:gap-11 gap-6 min-[1030px]:px-32 md:px-20 px-5 py-8">
        <div>
          <h3 className="lg:text-7xl min-[1024px]:text-4xl md:text-6xl text-3xl font-bold">
            Welcome to WebXV
          </h3>
        </div>
        <div className="lg:text-lg md:text-[17px] text-[14px] min-[1030px]:pr-32">
          <p>
            Meet cool WEB3 projects and connect with other crypto enthusiasts!
          </p>
        </div>
        <div>
          <button className="bg-[#335DD2] py-2 rounded">
            <a href="#" className="uppercase px-5 py-2.5 text-sm">
              <NavLink
              to={"/register"}>
              Register Now
            </NavLink>
            </a>
          </button>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12 flex justify-center items-center pb-8">
        <div className="w-full sm:max-w-[400px] max-w-[300px] bg-[#0E151B] flex flex-col lg:gap-6 gap-4 px-8 lg:py-6 py-4 rounded-2xl">
          <div className="text-3xl font-semibold text-center">
            <h2>Welcome back</h2>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            className="bg-[#18222F] py-1.5 px-2 placeholder:text-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-[#18222F] py-1.5 px-2 rounded placeholder:text-sm"
          />
          <button className="bg-[#335DD2] py-1.5 rounded uppercase">
            <a href="#" className="py-1.5 md:px-36 text-sm">
              login
            </a>
          </button>
          <p className="text-center text-[14px]">Forgotten your password?</p>
          <p className="text-center">
            Don't have an account?
            <NavLink
              to={"/register"}
              className="text-[#335DD2] ms-1 cursor-pointer">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
