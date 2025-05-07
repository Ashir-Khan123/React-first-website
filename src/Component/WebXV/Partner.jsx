import React from 'react';
import picOne from '../../assets/partner-1.png';
import picTwo from '../../assets/partner-2.png';
import picThree from '../../assets/partner-3.png';
import picFour from '../../assets/partner-4.png';
import picFive from '../../assets/partner-5.png';
import picSix from '../../assets/partner-6.png';
import picSeven from '../../assets/partner-7.png';

const Partner = () => {
  return (
    <div className='bg-[#0B0E12] text-[#335DD2] text-xl px-15 font-bold w-full'>
      <div className='flex justify-center py-8'>
        <h3 className='uppercase'>our partners</h3>
      </div>
      <div className='flex gap-8 pb-5 w-full max-w-[130px]'>
        <img src={picOne} alt="" />
        <img src={picTwo} alt="" />
        <img src={picThree} alt="" />
        <img src={picFour} alt="" />
        <img src={picFive} alt="" />
        <img src={picSix} alt="" />
        <img src={picSeven} alt="" />
      </div>
    </div>
  )
}

export default Partner






