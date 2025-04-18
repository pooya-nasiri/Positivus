import React from 'react'
import HeroSection from './components/HeroSection';
import ServicesBox from './components/ServicesBox';
import CAT from './components/CAT';
function Home() {
  return (
    <main className='mt-8 grid grid-cols-1 space-y-10'>
    <HeroSection/>
    <ServicesBox/>
    <CAT/>
    </main>
  )
}

export default Home