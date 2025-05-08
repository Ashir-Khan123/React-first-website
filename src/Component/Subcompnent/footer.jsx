import React from "react";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className="bg-[#0B0E12] text-[#A7B5C3]">
      <div className="flex justify-center pb-10">
        <div className="grid grid-cols-12 w-[72%]">
          <div className="col-span-8 w-[70%]">
            <img src={logo} alt="" className="w-[120px] pb-4" />
            <p className="py-3">
              A SocialFi platform for Web3.0 projects to connect with users.
            </p>
            <p>
              WebXV is a decentralized social platform for Web3.0 users to meet
              and connect with one another
            </p>
          </div>
          <div className="col-span-2">
            <h2 className="text-white text-lg font-semibold pb-5">Company</h2>
            <div className="leading-8">
              <p>About us</p>
              <p>Projects</p>
              <p>Community</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-white text-lg font-semibold pb-5">Social</h2>
            <div className="leading-8">
              <p>TikTok</p>
              <p>Twitter</p>
              <p>YouTube</p>
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[80%] py-8">
        <p className="font-normal text-[14px]">© Copyright 2023 XV | All Rights Reserved | WhitePaper</p>
      </div>
    </div>
  );
};

export default Footer;
