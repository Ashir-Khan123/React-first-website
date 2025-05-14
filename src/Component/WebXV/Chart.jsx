import React from "react";
import chartImageOne from "../../assets/chart-pic-1.png";
import chartImageTwo from "../../assets/chart-pic-2.png";
import chartImageThree from "../../assets/chart-pic-3.png";
import chartImageFour from "../../assets/chart-pic-4 (2).png";
import chartImageFive from "../../assets/chart-pic-5.png";
import blueImage from "../../assets/blue-image.png";
import blueSmall from "../../assets/small-blue-chart.png";
import redSmall from "../../assets/small-red-chart.png";

const Chart = () => {
  return (
    <div className="bg-[#0B0E12] text-[#828493] h-screen">
      <div className="text-center">
        <div className="text-[#335DD2] uppercase font-semibold py-3">
          <h6>cryptocurrencies</h6>
        </div>
        <div className="text-white text-3xl sm:text-5xl font-bold capitalize">
          <h2>Top crypto chart</h2>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="bg-[#0E151B] md:w-[60%] w-[90%] rounded-2xl">
          <div className="adjust flex justify-between p-5 text-[11px] border border-[#292929] rounded-tr-3xl rounded-tl-3xl font-semibold">
            <div>
              <p className="uppercase">name</p>
            </div>
            <div>
              <p className="uppercase">price</p>
            </div>
            <div>
              <p className="uppercase">graph</p>
            </div>
            <div></div>
          </div>
          <div className="adjust flex justify-between p-4 sm:text-[11px] text-[10px] border border-[#292929] font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-[23px]">
                <img src={chartImageOne} alt="" />
              </div>
              <div>
                <div>
                  <p className="text-white">Bitcoin</p>
                  <p>BTC / USD</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-[#FFFFFF]">$42,122.00</div>
              <div className="text-[#EA3943]">-2.93%</div>
              <div>
                <img src={redSmall} alt="" />
              </div>
            </div>
            <div className="sm:w-[70px] w-[50px]">
              <img src={blueImage} alt="" />
            </div>
            <div></div>
          </div>
          <div className="adjust flex justify-between p-4 sm:text-[11px] text-[10px] border border-[#292929] font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-[23px]">
                <img src={chartImageTwo} alt="" />
              </div>
              <div>
                <div>
                  <p className="text-white">Ethereum</p>
                  <p>ETH / USD</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-[#FFFFFF]">$2,214.77</div>
              <div className="text-[#EA3943]">-2.22%</div>
              <div>
                <img src={redSmall} alt="" />
              </div>
            </div>
            <div className="sm:w-[70px] w-[50px]">
              <img src={blueImage} alt="" />
            </div>
            <div></div>
          </div>
          <div className="adjust flex justify-between p-4 sm:text-[11px] text-[10px] border border-[#292929] font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-[23px]">
                <img src={chartImageThree} alt="" />
              </div>
              <div>
                <div>
                  <p className="text-white">Tether</p>
                  <p>USDT/USD</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-[#FFFFFF]">$0.9999</div>
              <div className="text-[#335DD2]">0.04%</div>
              <div>
                <img src={blueSmall} alt="" />
              </div>
            </div>
            <div className="sm:w-[70px] w-[50px]">
              <img src={blueImage} alt="" />
            </div>
            <div></div>
          </div>
          <div className="adjust flex justify-between p-4 sm:text-[11px] text-[10px] border border-[#292929] font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-[25px]">
                <img src={chartImageFour} alt="" />
              </div>
              <div>
                <div>
                  <p className="text-white">Solana</p>
                  <p>SOL / USD</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-[#FFFFFF]">$107.41</div>
              <div className="text-[#EA3943]">-11.20%</div>
              <div>
                <img src={redSmall} alt="" />
              </div>
            </div>
            <div className="sm:w-[70px] w-[50px]">
              <img src={blueImage} alt="" />
            </div>
            <div></div>
          </div>
          <div className="adjust flex justify-between p-4 sm:text-[11px] text-[10px] border border-[#3c3c3c] rounded-br-3xl rounded-bl-3xl font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-[23px]">
                <img
                  src={chartImageFive}
                  alt=""
                  className="bg-white rounded-2xl"
                />
              </div>
              <div>
                <div>
                  <p className="text-white">XRP</p>
                  <p>XRP / USD</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-[#FFFFFF]">$0.6183</div>
              <div className="text-[#EA3943]">-3.09%</div>
              <div>
                <img src={redSmall} alt="" />
              </div>
            </div>
            <div className="sm:w-[70px] w-[50px]">
              <img src={blueImage} alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
