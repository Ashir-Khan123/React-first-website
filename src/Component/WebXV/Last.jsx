import React from "react";
import background from '../../assets/background.png'
import RegisterSection from '../RegisterPage/RegisterSection'

const Last = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="bg-[#0B0E12] text-white py-14 pb-40">
      <div className="flex flex-col items-center">
        <div className="w-[50%]">
          <h2 className="font-bold text-center text-5xl capitalize py-8">
            With XV Token the possibilities are limitless
          </h2>
          <p className="text-center text-lg pb-12">
            One token for everything. $XV is the utility token for an ecosystem
            that has gotten bigger than ever before and is now fully
            community-oriented.
          </p>
          <div className="text-center">
            <button>
              <a to={"RegisterSection"} className="bg-[#335DD2] uppercase px-3 py-2 rounded">
                register now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
