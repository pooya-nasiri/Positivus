import React from 'react'

function CAT() {
  return (
    <section>
        <div className='w-full bg-whiteMlike  rounded-xl '>
            <div className='flex flex-col p-10 space-y-5 text-start'>
                <h2 className='text-[clamp(0.4rem,7vw,2.5rem)] font-semibold'>Let’s make things happen</h2>
                <p className='text-[clamp(0.9rem,2.5vw,5rem)]  text-wrap'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <button className='bg-dark py-3 px-4 rounded-xl text-white'>Get your free proposal</button>
            </div>
        </div>
    </section>
  )
}

export default CAT
