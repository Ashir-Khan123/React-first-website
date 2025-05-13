import React from "react";
import communityImageOne from "../../assets/community-pic-1.png";
import communityImageTwo from "../../assets/community-pic-2.png";
import communityImageThree from "../../assets/community-pic-3.png";
import communityImageFour from "../../assets/community-pic-4.png";
import communityImageFive from "../../assets/community-pic-5.png";
import communityImageSix from "../../assets/community-pic-6.png";
import communityImageSeven from "../../assets/community-pic-7.png";
import communityImageEight from "../../assets/community-pic-8.png";
import communityImageNine from "../../assets/community-pic-9.png";
import communityImageTen from "../../assets/community-pic-10.png";
import { NavLink } from "react-router";

const RegisterSection = () => {
  const RegisterImages = [
    communityImageOne,
    communityImageTwo,
    communityImageThree,
    communityImageFour,
    communityImageFive,
    communityImageSix,
    communityImageSeven,
    communityImageEight,
    communityImageNine,
    communityImageTen,
  ];
  return (
    <div className="bg-[#0B0E12] py-20 pt-14 flex justify-center">
      <div className="sm:w-[90%] max-[640px]:w-[87%]">
        <div className="grid grid-cols-12 gap-x-5 gap-y-14">
          <div className="lg:col-span-8 col-span-12 lg:px-12">
            <div className="grid grid-cols-5">
              {RegisterImages.map((v) => {
                return (
                  <div className="">
                    <img src={v} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 flex justify-center items-center pb-8">
            <div className="w-full  bg-[#0E151B] flex flex-col lg:gap-3 gap-4 px-6 lg:py-5  py-2.5 rounded-2xl">
              <div className="text-2xl font-semibold text-center text-white">
                <h2>Registeration</h2>
              </div>
              <input
                type="name"
                name="name"
                placeholder="Username"
                className="bg-[#18222F] text-white py-1.5 px-2 placeholder:text-sm placeholder:text-[#b8b8b8]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#18222F] text-white py-1.5 px-2 rounded placeholder:text-sm placeholder:text-[#b8b8b8]"
              />
              <input
                type="password"
                name="password"
                placeholder="Retype email"
                className="bg-[#18222F] text-white py-1.5 px-2 rounded placeholder:text-sm placeholder:text-[#b8b8b8]"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-[#18222F] text-white py-1.5 px-2 rounded placeholder:text-sm placeholder:text-[#b8b8b8]"
              />
              <input
                type="password"
                name="password"
                placeholder="Re-type Password"
                className="bg-[#18222F] text-white py-1.5 px-2 rounded placeholder:text-sm placeholder:text-[#b8b8b8]"
              />
              <input
                type="password"
                name="password"
                placeholder="Wallet address"
                className="bg-[#18222F] text-white py-1.5 px-2 rounded placeholder:text-sm placeholder:text-[#b8b8b8]"
              />
              <button className="bg-[#335DD2] py-1.5 text-sm text-white hover:bg-[#3380d2] rounded uppercase cursor-pointer">
                Register
              </button>
              <p className="text-center text-[#b8b8b8] text-sm">
                Already have an account?
                <span className="text-blue-500 pl-1.5 font-semibold cursor-pointer">
                 <NavLink to={"/"} className="text-[#335DD2] pl-1.5 cursor-pointer">
                Login
              </NavLink>
                </span>
              </p>
              <button className="bg-[#131A23] text-[12px] text-[#e9e9e9] font-semibold py-2 rounded uppercase hover:bg-white hover:rounded cursor-pointer hover:text-black mb-2">
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
