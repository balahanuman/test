import React from 'react'

import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Use from './pages/Use'
import Careers from './pages/Careers'
import Products from './pages/Products'
import Login from './pages/Login'
import CuteRobot from './pages/CuteRobot'
import Automation from './pages/Automation'
import Navbar from './componet/Navbar'
import Robot from './pages/Robot'
import Computer from './pages/Computer'


const App = () => {
  return (
    <div>
      
      yok
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/use"element={<Use/>}/>
        <Route path="/careers"element={<Careers/>}/>
        <Route path="/products"element={<Products/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/robot"element={<Robot/>}/>
        <Route path="/computer"element={<Computer/>}/>
        <Route path="/cuterobot"element={<CuteRobot/>}/>
        <Route path="/automation"element={<Automation/>}/>  
      </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}







export default App

