import React from "react";
import background from '../../assets/background.png'
import RegisterSection from '../AllPages/RegisterPage/RegisterSection'
import { NavLink } from "react-router";

const Last = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="bg-[#0B0E12] text-white pt-14 pb-32">
      <div className="flex flex-col items-center">
        <div className="md:w-[50%] w-[90%]">
          <h2 className="font-bold text-center text-4xl sm:text-5xl capitalize py-8">
            With XV Token the possibilities are limitless
          </h2>
          <p className="text-center text-lg pb-12">
            One token for everything. $XV is the utility token for an ecosystem
            that has gotten bigger than ever before and is now fully
            community-oriented.
          </p>
          <div className="text-center">
            <button className="bg-[#335DD2] uppercase py-2 rounded">
            <NavLink to={"/register"} className="cursor-pointer px-8 py-2">
              Register
            </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
