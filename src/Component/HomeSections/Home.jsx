import React from 'react'
import HeroSection from '../WebXV/HeroSection'
import Chart from '../WebXV/Chart'
import Last from '../WebXV/Last'
import Partner from '../WebXV/partner'
import AboutUs from '../WebXV/AboutUs'

export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Partner/>
        <AboutUs/>
        <Chart/>
        <Last/>
    </div>
  )
}

export default Home