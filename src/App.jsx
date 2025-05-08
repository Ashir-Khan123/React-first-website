import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Community from './Component/Community/Community'
import AboutUs from './Component/About-us/About-us'
import Home from './Component/HomeSections/Home'
import NavbarComp from './Component/Subcompnent/Navbar'
import Footer from './Component/Subcompnent/footer'
import ProjectCards from './Component/AllProjects/ProjectCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all_project' element={<ProjectCards/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
