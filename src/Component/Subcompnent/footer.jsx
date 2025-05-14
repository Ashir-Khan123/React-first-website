import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <div className="bg-[#0B0E12] text-[#A7B5C3] pt-15">
      <div className="flex justify-center md:pb-10 pb-6">
        <div className="grid grid-cols-12 lg:w-[72%] w-[90%]">
          <div className="md:col-span-8 col-span-12 md:w-[70%] w-full">
            <img src={logo} alt="" className="w-[120px] pb-4" />
            <p className="py-3">
              A SocialFi platform for Web3.0 projects to connect with users.
            </p>
            <p>
              WebXV is a decentralized social platform for Web3.0 users to meet
              and connect with one another
            </p>
          </div>
          <div className="md:col-span-2 col-span-8">
            <h2 className="text-white text-lg font-semibold md:pb-5 pt-8">Company</h2>
            <div className="leading-8">
              <p><NavLink to={"/about_us"} >About us</NavLink></p>
              <p><NavLink to={"/all_project"} >Projects</NavLink></p>
              <p><NavLink to={"/community"} >Community</NavLink></p>
              <p><NavLink to={"/privacyPolicy"} >Privacy Policy</NavLink></p>
              <p><NavLink to={"/Termsandcondition"} >Terms & Conditions</NavLink></p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-4">
            <h2 className="text-white text-lg font-semibold md:pb-5 pt-9">Social</h2>
            <div className="leading-8">
              <p>TikTok</p>
              <p>Twitter</p>
              <p>YouTube</p>
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-end justify-center md:w-[80%] w-full md:py-8 pb-8 px-10">
        <p className="font-normal text-[14px] text-center">© Copyright 2023 XV | All Rights Reserved | WhitePaper</p>
      </div>
    </div>
  );
};

export default Footer;
