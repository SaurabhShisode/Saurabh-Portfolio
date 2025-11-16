import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import { Pointer } from './components/ui/pointer.tsx'

function App() {


  return (
    <>
    <Pointer />
    <Navbar />
    
    <Hero />
    </>
  )
}

export default App
