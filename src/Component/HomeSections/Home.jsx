import React from 'react'
import HeroSection from '../WebXV/HeroSection'
import Partner from '../WebXV/partner'
import AboutUs from '../About-us/About-us'
import Chart from '../WebXV/Chart'
import Last from '../WebXV/Last'

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