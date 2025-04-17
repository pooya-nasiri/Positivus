import React from 'react'
import heroSection from './assts/heroSection.png';
import companyse from './assts/companyes.png';
import Marquee from "react-fast-marquee";

function HeroSection() {
  return (
    <div>
        <div className='space-y-2'>
            <h1 className='text-[clamp(2rem,10vw,30rem)] font-semibold'>Navigating the digital landscape for success</h1>
            <img src={heroSection}alt='logo'/>
        </div>
        <img className='hidden' src={heroSection} 
        alt="logo" />
        <h3 className='text-[clamp(0.5rem,4vw,3rem)] mb-2'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</h3>
        <a href='#' className='bg-dark w-full text-white py-4 flex justify-center items-center rounded-xl mb-4'>Book a consultation</a>
        {/* Logo auto scroll */}
        <div >
            <Marquee speed={40} >
                <div className='overflow-hidden w-250'>
            <img src={companyse} alt="companyes"   />
                </div>
            </Marquee>
            <Marquee direction='right' speed={40} className='mt-1' >
                <div className='overflow-hidden w-250'>
            <img src={companyse} alt="companyes"   />
                </div>
            </Marquee>
        </div>
    </div>
  )
}

export default HeroSection
