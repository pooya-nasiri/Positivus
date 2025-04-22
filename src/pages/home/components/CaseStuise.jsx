import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
function CaseStuise() {
  return (
   <section className=''>
    {/* Titile */}
    <div className='text-center '>
        <span className='bg-greenLight font-semibold text-2xl'>Case Stuise</span>
        <p className='text-[clamp(0.2rem,4.5vh,0.7rem)] mt-3' >Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
    </div>
    {/* explor real-life examples */}
    <div className=' text-white flex flex-row overflow-auto w-full   scroll-smooth gap-10 mt-5 snap-x snap-mandatory'>
        {/* exmples */}
        <div className='bg-dark p-6 rounded-2xl flex flex-col space-y-2  max-w-64 shrink-0 ' >
            <p>
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
           <a href='#' className='flex items-center text-greenLight text-xl'>Learn more<FiArrowUpRight/></a>
        </div>
        <div className='bg-dark p-6 rounded-2xl flex flex-col space-y-2 snap-x snap-mandatory max-w-64 shrink-0 ' >
            <p>
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
           <a href='#' className='flex items-center text-greenLight text-xl'>Learn more<FiArrowUpRight/></a>
        </div>

    </div>
   </section>
  )
}

export default CaseStuise
