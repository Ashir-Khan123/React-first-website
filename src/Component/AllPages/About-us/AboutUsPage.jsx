import React from 'react'
import background from "../../../assets/Top-Blue-Image.png"
import aboutCardOne from '../../../assets/about-card-1.png'
import aboutCardTwo from '../../../assets/about-card-2.png'
import aboutCardThree from '../../../assets/about-card-3.png'
import aboutCardFour from '../../../assets/about-card-4.png'
import AboutUs from '../../WebXV/AboutUs'

const AboutUsPage = () => {
  const aboutCard = [
    {
      cardImage : aboutCardOne,
      CardTitle : "Create a Wallet",
      cardText : (
        <>
        Download Metamask App or any wallet
        <br /><br />
        Download the Google chrome extension
        </>
      )
    },
    {
      cardImage : aboutCardTwo,
      CardTitle : "Create a Get ETH/BNB",
      cardText : (
        <>
        Have ETH or BNB in your wallet to swap to $XV
        <br /><br />
        If you don't have any ETH, you can buy directly on Metamask
        <br /><br />
        Transfer from another wallet
        </>
      )
    },
    {
      cardImage : aboutCardThree,
      CardTitle : "Go to Uniswap or PancakeSwap",
      cardText : (
        <>
       Connect to Uniswap if you're buying on ETH side or PancakeSwap
        <br /><br />
        Paste the $VX token address into Uniswap, select XV, and confirm.
        <br /><br />
        When Metamask prompts you for a wallet signature, sign.
        </>
      )
    },
    {
      cardImage : aboutCardFour,
      CardTitle : "Swap your ETH or BNB for $XV",
      cardText : (
        <>
        Swap your ETH/BNB for $XV
        <br /><br />
        We have a 5% tax so you need to set your slippage a little above 6% specific slippage
        <br /><br />
        You may need to use higher slippage during times of market volatility
        </>
      )
    },
  ]


  return (
    <div style={{ backgroundImage: `url(${background})` }} className='bg-[#0B0E12] bg-no-repeat text-white sm:py-20 py-12 pt-24'>
      <div className='flex justify-center'>
        <h2 className='text-5xl capitalize font-semibold'>About us</h2>
      </div>
      <div>
        <div>
        <AboutUs heading={"About WEBXV"}/>
        </div>
      </div>
      <div className='flex justify-center'>
        <h2 className='sm:text-4xl text-2xl font-semibold'>How you Buy $XV Token</h2>
      </div>
      <div className='flex justify-center'>
      <div className='grid grid-cols-12 gap-4 py-11 md:w-[90%] lg:w-[70%] sm:w-[70%] w-[85%]'>
        {aboutCard.map((v) => {
          return(
          <div className='bg-[#10171E] md:col-span-6 col-span-12 flex justify-center py-8 px-6 rounded-2xl'>
          <div>
            <div className='flex justify-center pb-5'>
              <img src={v.cardImage} alt="" className='md:w-[80%] w-[80%]'/>
            </div>
            <div className='font-semibold pb-3'>
              <h3>{v.CardTitle}</h3>
            </div>
            <div className='text-[#A7B5C3] text-[12px]'>
              <p>{v.cardText}</p>
            </div>
          </div>
        </div>
        )
        })}        
      </div>
      </div>
    </div>
  )
}

export default AboutUsPage






















































// <div className='grid grid-cols-12'>
//         {aboutCard.map((v) => {
//           return(
//             <div className='flex flex-col md:col-span-6 bg-[#0B0E12]'>
//               <div>
//               <div className='w-full'>
//                 <img src={v.cardImage} alt="" className='w-[70%]'/>
//               </div>
//               <div className='font-semibold'>
//                 <p>{v.CardTitle}</p>
//               </div>
//               <div className='text-[#A7B5C3]'>
//               <p>{v.cardText}</p>
//               </div>
//             </div>
//             </div>
        
//           )
//         })}
//       </div>