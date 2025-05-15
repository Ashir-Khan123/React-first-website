import React from "react";
import { NavLink } from "react-router";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 bg-[#0B0E12] text-white lg:text-start text-center py-16">
      <div className="lg:col-span-6 col-span-12 flex flex-col gap-3 lg:gap-11 min-[1030px]:px-32 md:px-20 px-5">
        <div>
          <h3 className="lg:text-7xl min-[1024px]:text-4xl md:text-6xl text-4xl font-bold">
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
              <NavLink to={"/register"}>Register Now</NavLink>
            </a>
          </button>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12 flex justify-center items-center pt-15 lg:pt-0">
        <div className="w-full sm:max-w-[400px] max-w-[300px] bg-[#0E151B] flex flex-col lg:gap-6 gap-4 px-5 lg:py-6 py-3 rounded-2xl">
          <div className="text-2xl font-semibold text-center">
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
          <button className="bg-[#335DD2] hover:bg-[#3380d2] cursor-pointer md:px-36 text-sm py-2 rounded uppercase">
            login
          </button>
          <p className="text-center text-[14px]">Forgotten your password?</p>
          <p className="text-center">
            Don't have an account?
            <NavLink to={"/register"} className="text-[#335DD2] pl-1.5 cursor-pointer">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
