import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <Features/>
        <Footer/>
    </main>
  )
}

export default App