import { useState } from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './sites/Home';
import Mieten from './sites/Mieten';
import About from './sites/About';
import './app.css'
import "@fontsource/roboto";
import ThankYou from './sites/ThankYou';
import Sorry from './sites/Sorry';


function App() {

  

  return (
    <>
      <div className='App-Container'>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/rent' element={<Mieten />} />
          <Route path='/about' element={<About />} />
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path='/sorry' element={<Sorry />} />
        </Routes>
      </div>
    </>
  )
}

export default App
