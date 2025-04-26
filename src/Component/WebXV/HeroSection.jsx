import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-black text-white'>
      <div className='lg:flex justify-between items-center w-[88%] px-6'>
        <div className='lg:flex flex-col justify-center items-center h-screen'>
          <div className='w-[63%] flex flex-col justify-around gap-8'>
          <div>
          <h1 className='text-6xl font-bold'>
          Welcome to WebXV
          </h1>
          </div>
          <div>
          <p className=''>
          Meet cool WEB3 projects and connect with other crypto enthusiasts!
          </p>
          </div>
          <div>
          <button className='mb-20 rounded py-3 bg-blue-700 text-sm'>
          <a href="#" className='px-5 py-3'>REGISTER NOW</a>
          </button>
          </div>
          </div>
        </div>
        <div className='bg-gray-900 w-[30%] mb-9 rounded-2xl'>
          <div className='p-6 flex flex-col text-center gap-3'>
            <div className='text-2xl font-medium py-2'>
            <h2>Welcome back</h2>
            </div>
            <div className='bg-gray-700 rounded'>
              <input type="email" name='email' placeholder='Username or email' className='px-2 py-2 focus:outline-none text-white w-full'/>
            </div>
            <div className='bg-gray-700 rounded'>
              <input type="password" name='password' placeholder='Password' className='px-2 py-2 focus:outline-none w-full'/>
            </div>
            <div>
              <button className='rounded py-2.5 hover:cursor-pointer bg-blue-700 text-sm w-full'>
                <a href ="#" className='px-5 py-3'>
                  LOGIN
                </a>
              </button>
            </div>
            <div className='text-sm py-2'>
              <p>Forgotten your password?</p>
            </div>
            <div className='flex justify-center gap-1 text-[15px]'>
              <div className=''>
              Don't have an account? 
              </div>
              <div className='text-blue-600 font-medium'>
                <a href="#">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection