import React from 'react'
import HeroSection from '../WebXV/HeroSection'
import Chart from '../WebXV/Chart'
import Last from '../WebXV/Last'
import AboutUs from '../WebXV/AboutUs'
import PartnerSection from '../WebXV/PartnerSection'

export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <PartnerSection/>
        <AboutUs/>
        <Chart/>
        <Last/>
    </div>
  )
}

export default Home