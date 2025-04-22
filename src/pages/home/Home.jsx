import React from 'react'
import HeroSection from './components/HeroSection';
import ServicesBox from './components/ServicesBox';
import CAT from './components/CAT';
import CaseStuise from './components/CaseStuise';
import Procses from './components/Procses';
function Home() {
  return (
    <main className='mt-8 grid grid-cols-1 space-y-10'>
    <HeroSection/>
    <ServicesBox/>
    <CAT/>
    <CaseStuise/>
    <Procses/>
    </main>
  )
}

export default Home