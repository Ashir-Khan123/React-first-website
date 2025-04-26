import { useState } from 'react'
import { Route, Routes } from 'react-router'
import AllProjects from './Component/AllProjects/All-Projects'
import Community from './Component/Community/Community'
import AboutUs from './Component/About-us/About-us'
import Home from './Component/HomeSections/Home'
import NavbarComp from './Component/Subcompnent/Navbar'

function App() {
  const [count, setCount] = useState(0) // remove if not using

  return (
    <div>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all_project' element={<AllProjects/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default App
