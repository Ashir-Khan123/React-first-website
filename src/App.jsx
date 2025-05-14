import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Community from './Component/Community/Community'
import Home from './Component/HomeSections/Home'
import NavbarComp from './Component/Subcompnent/Navbar'
import Footer from './Component/Subcompnent/footer'
import ProjectCards from './Component/AllProjects/ProjectCards'
import AboutUsPage from './Component/About-us/AboutUsPage'
import RegisterSection from './Component/RegisterPage/RegisterSection'
import TermsSection from './Component/TermsCondition/TermsSection'
// import TermsSection from './Component/TermsCondition/TermsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all_project' element={<ProjectCards/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/about_us' element={<AboutUsPage/>}/>
        <Route path='/register' element={<RegisterSection/>}/>
        <Route path='/Termsandcondition' element={<TermsSection/>}/>
        <Route path='/privacyPolicy' element={<privacySection/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
