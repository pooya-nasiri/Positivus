import React from 'react';
import { LuArrowUpRight } from "react-icons/lu";
import SEO from './assts/SEO.png';
import PCA from "./assts/PCA.png";
import SMM from "./assts/SMM.png";
import EM from "./assts/EM.png";
import CC from "./assts/CC.png";
import AAT from "./assts/AAT.png";
function ServicesBox() {
  return (
    <section className=' flex flex-col space-y-4'>
        {/* heading Services */}
        <div className='text-center '>
            <span className='bg-greenLight  text-2xl font-semibold '>Services</span>
            <h3 className='text-[clamp(0.3rem,3.5vw,0.9rem)] mt-5 text-center text-wrap'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</h3>
        </div>
        {/* services Box */}
        <div className='grid grid-cols-1 gap-y-4'>

            {/* boxs */}

            <div className='p-8 border rounded-2xl border-b-5 bg-whiteMlike'>
                {/* title */}
                <div>
                    <span className='bg-greenLight rounded-xl font-semibold p-1'>Search engin</span>
                    <br/>
                    <span className='bg-greenLight rounded-xl font-semibold p-1'>optimaztion</span>
                </div>
                {/* more / Logo */}
                <div className='grid grid-cols-2 justify-between items-end'>
                    <a href='#' className='flex items-center gap-1'>
                        <LuArrowUpRight className='text-greenLight bg-dark rounded-3xl text-3xl p-1'/>
                        <h4 className='hidden'>Learn more</h4>
                    </a>
                    <img src={SEO}/>
                </div>
            </div>
            
            <div className='p-8 border rounded-2xl border-b-5 bg-greenLight'>
                {/* title */}
                <div>
                    <span className='bg-whiteMlike rounded-xl font-semibold p-1'>Pay-per-click</span>
                    <br/>
                    <span className='bg-whiteMlike rounded-xl font-semibold p-1'>advertising</span>
                </div>
                {/* more / Logo */}
                <div className='grid grid-cols-2 justify-between items-end'>
                    <a href='#' className='flex items-center gap-1'>
                        <LuArrowUpRight className='text-greenLight bg-dark rounded-3xl text-3xl p-1'/>
                        <h4 className='hidden'>Learn more</h4>
                    </a>
                    <img src={PCA}/>
                </div>
            </div>

            <div className='p-8 border rounded-2xl border-b-5 bg-dark'>
                {/* title */}
                <div>
                    <span className='bg-whiteMlike rounded-xl font-semibold p-1'>
                    Social Media
                    </span>
                    <br/>
                    <span className='bg-whiteMlike rounded-xl font-semibold p-1'>
                    Marketing
                    </span>
                </div>
                {/* more / Logo */}
                <div className='grid grid-cols-2 justify-between items-end'>
                    <a href='#' className='flex items-center gap-1'>
                        <LuArrowUpRight className='text-dark bg-whiteMlike rounded-3xl text-3xl p-1'/>
                        <h4 className='hidden'>Learn more</h4>
                    </a>
                    <img src={SMM}/>
                </div>
            </div>

            <div className='p-8 border rounded-2xl border-b-5 bg-whiteMlike'>
                {/* title */}
                <div>
                    <span className='bg-greenLight rounded-xl font-semibold p-1'>
                    Social Media
                    </span>
                    <br/>
                    <span className='bg-greenLight rounded-xl font-semibold p-1'>
                    Marketing
                    </span>
                </div>
                {/* more / Logo */}
                <div className='grid grid-cols-2 justify-between items-end'>
                    <a href='#' className='flex items-center gap-1'>
                        <LuArrowUpRight className='text-greenLight bg-dark rounded-3xl text-3xl p-1'/>
                        <h4 className='hidden'>Learn more</h4>
                    </a>
                    <img src={EM}/>
                </div>
            </div>

            <div className='p-8 border rounded-2xl border-b-5 bg-greenLight'>
                {/* title */}
                <div>
                    <span className='bg-whiteMlike rounded-xl font-semibold p-1'>
                    Content
                    </span>
                    <br/>
                    <span className='bg-whiteMlike rounded-xl font-semibold p-1'>
                    Creation
                    </span>
                </div>
                {/* more / Logo */}
                <div className='grid grid-cols-2 justify-between items-end'>
                    <a href='#' className='flex items-center gap-1'>
                        <LuArrowUpRight className='text-greenLight bg-dark rounded-3xl text-3xl p-1'/>
                        <h4 className='hidden'>Learn more</h4>
                    </a>
                    <img src={CC}/>
                </div>
            </div>

            <div className='p-8 border rounded-2xl border-b-5 bg-dark'>
                {/* title */}
                <div>
                    <span className='bg-greenLight rounded-xs font-semibold p-1'>
                    Analytics and 
                    </span>
                    <br/>
                    <span className='bg-greenLight rounded-xs font-semibold p-1'>
                    Tracking
                    </span>
                </div>
                {/* more / Logo */}
                <div className='grid grid-cols-2 justify-between items-end'>
                    <a href='#' className='flex items-center gap-1'>
                        <LuArrowUpRight className='text-dark bg-whiteMlike rounded-3xl text-3xl p-1'/>
                        <h4 className='hidden'>Learn more</h4>
                    </a>
                    <img src={AAT}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesBox
