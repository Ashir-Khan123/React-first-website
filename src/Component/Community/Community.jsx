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

const Community = () => {
  const communityImages = [
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
    <div className="bg-[#0B0E12] py-16 pt-14 flex justify-center">
      <div className="sm:w-[92%] max-[640px]:w-[87%]">
        <div className="grid grid-cols-12 gap-x-4 gap-y-14">
          <div className="lg:col-span-8 col-span-12 lg:px-8">
          <div className="relative w-full">
            <div className="grid grid-cols-5">
              {communityImages.map((v) => {
                return (
                  <div>
                    <img src={v} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="absolute flex flex-col bottom-7 sm:bottom-9 md:bottom-14 lg:left-5 left-4 sm:left-6 md:left-10 min-[425px]:px-2 min-[845px]:hidden lg:block">
              <h1 className="sm:text-4xl max-[430px]:text-lg text-2xl text-white font-bold py-1">Join our amazing community</h1>
              <p className="font-medium sm:text-sm text-[8px] text-justify text-white">
                Meet cool Web3 projects and connect with other crypto
                enthusiasts!
              </p>
            </div>
          </div>
          </div>
          <div className="lg:col-span-4 col-span-12 flex justify-center items-center pb-8">
            <div className="w-full  bg-[#0E151B] flex flex-col lg:gap-3 gap-4 px-6 lg:py-5  py-4 rounded-2xl">
              <div className="text-3xl font-semibold text-center text-white">
                <h2>Login</h2>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Username or Email"
                className="bg-[#18222F] py-1.5 px-2 placeholder:text-sm placeholder:text-[#b8b8b8]"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-[#18222F] py-1.5 px-2 rounded placeholder:text-sm placeholder:text-[#b8b8b8]"
              />
              <button className="bg-[#335DD2] hover:bg-[#3380d2] cursor-pointer text-sm text-white py-1.5 rounded uppercase">
                login
              </button>
              <button className="bg-[#131A23] hover:bg-white hover:rounded cursor-pointer hover:text-black text-sm text-[#e9e9e9] font-semibold py-1.5 rounded uppercase">
                CONTINUE WITH GOOGLE
              </button>
              <p className="text-center text-[14px] text-[#b8b8b8]">
                Forgotten your password?
              </p>
              <p className="text-center text-[#b8b8b8] text-sm">
                Don't have an account?
                <span className="text-blue-500 pl-1.5 font-semibold cursor-pointer">
                  <NavLink
                    to={"/register"}
                    className="text-[#335DD2] pl-1.5 cursor-pointer"
                  >
                    Register
                  </NavLink>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
