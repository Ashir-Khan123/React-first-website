import React from 'react'
import communityImageOne from '../../assets/community-pic-1.png'
import communityImageTwo from '../../assets/community-pic-2.png'
import communityImageThree from '../../assets/community-pic-3.png'
import communityImageFour from '../../assets/community-pic-4.png'
import communityImageFive from '../../assets/community-pic-5.png'
import communityImageSix from '../../assets/community-pic-6.png'
import communityImageSeven from '../../assets/community-pic-7.png'
import communityImageEight from '../../assets/community-pic-8.png'
import communityImageNine from '../../assets/community-pic-9.png'
import communityImageTen from '../../assets/community-pic-10.png'

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
    communityImageTen
  ]
  return (
    <div className='bg-[#0B0E12] sm:py-28 pt-14 flex justify-center'>
      <div className='sm:w-[85%] max-[640px]:w-[72%]'>
      <div className='grid grid-cols-12 gap-x-8 gap-y-14'>
        <div className='lg:col-span-7 col-span-12 px-12'>
        <div className='grid grid-cols-5'>
        {RegisterImages.map((v) => {
          return(
            <div className=''>
              <img src={v} alt=""/>
            </div>
          )
        })}
        </div>
        </div>
        <div className="lg:col-span-5 col-span-12 flex justify-center items-center pb-8">
        <div className="w-full  bg-[#0E151B] flex flex-col lg:gap-3 gap-4 px-8 lg:py-5  py-4 rounded-2xl">
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
          <button className="bg-[#335DD2] py-1.5 rounded uppercase">
            <a href="#" className="py-1.5 md:px-36 text-sm text-white">
              login
            </a>
          </button>
          <button className="bg-[#131A23] py-1.5 rounded uppercase">
            <a href="#" className="text-sm text-[#e9e9e9] font-semibold">
            CONTINUE WITH GOOGLE
            </a>
          </button>
          <p className="text-center text-[14px] text-[#b8b8b8]">Forgotten your password?</p>
          <p className="text-center text-[#b8b8b8] text-sm">
            Don't have an account?
            <span className="text-blue-500 pl-1.5 font-semibold">Register</span>
          </p>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default RegisterSection