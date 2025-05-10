import React from "react";
import aboutImage from "../../assets/about-side-img.png";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-12 bg-[#0B0E12] text-[#828493] py-24 lg:px-4 sm:px-8">
      <div className="lg:col-span-6 col-span-12">
        <div className="lg:px-[100px] px-6 leading-5">
          <p className="uppercase text-[#335DD2] font-semibold">About us</p>
          <h2 className="pt-2 lg:text-4xl text-3xl font-bold capitalize text-white">
            Who we are
          </h2>
          <p className="py-4 text-sm">
            XV is a community-focused project led by a highly experienced team
            of Web3 builders and traders. Our founder A On made his name in the
            industry moderating for several early crypto projects before the
            2021 bull run.
          </p>
          <p className="text-sm">
            XV is also supported by several team members that are actively
            involved in the day-to-day running of the community. Join us on
            Telegram and Twitter.
          </p>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12 w-full flex justify-center pt-10 lg:pt-1">
        <img
          src={aboutImage}
          alt="About-side-image"
          className="lg:max-w-[90%] sm:max-w-[70%] max-w-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
