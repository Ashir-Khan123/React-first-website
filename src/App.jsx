import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Community from './Component/AllPages/Community/Community'
import Home from './Component/AllPages/HomeSections/Home'
import NavbarComp from './Component/Subcompnent/Navbar'
import Footer from './Component/Subcompnent/footer'
import ProjectCards from './Component/AllPages/AllProjects/ProjectCards'
import AboutUsPage from './Component/AllPages/About-us/AboutUsPage'
import RegisterSection from './Component/AllPages/RegisterPage/RegisterSection'
import TermsSection from './Component/AllPages/TermsCondition/TermsSection'
import PrivacySection from './Component/AllPages/PrivacyPolicy/privacySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/All_project' element={<ProjectCards/>}/>
        <Route path='/Community' element={<Community/>}/>
        <Route path='/About_us' element={<AboutUsPage/>}/>
        <Route path='/Register' element={<RegisterSection/>}/>
        <Route path='/Termsandcondition' element={<TermsSection/>}/>
        <Route path='/privacyPolicy' element={<PrivacySection/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
