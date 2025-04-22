import { useState } from "react";
import { HiOutlinePlusSm,HiMinus } from "react-icons/hi";

function Procses() {
   const [click,setclick]=useState(false)
   const [click2,setclick2]=useState(false)
   const [click3,setclick3]=useState(false)
   const [click4,setclick4]=useState(false)
   const [click5,setclick5]=useState(false)
   const [click6,setclick6]=useState(false)
    return (
        <section className="grid grid-cols-1 space-y-2.5">
        {/* title */}
        <div className='text-center '>
            <span className='bg-greenLight text-3xl font-semibold'>Our Working Process </span>
            <p className='mt-2.5 text-xs'>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        {/* procses block */}
        <div className='flex flex-col '>
            <div className={`${click ? 'bg-greenLight':'bg-whiteMlike'} rounded-xl p-4 transition ease-in-out  border-b-4 border`}>
                {/* header */}
                <div>
                    <div className=' border-b flex items-center justify-between w-full pb-2'>
                        <div className="flex gap-3 items-center">
                        <p className="font-semibold text-2xl">01</p>
                        <p className="font-semibold">Consultation</p>
                        </div>
                        {/* button */}
                        <div className="border rounded-2xl p-1 bg-white ">
                            <HiOutlinePlusSm  onClick={()=>{setclick(true)}} className={`${click ? 'hidden':'flex'} `}/>
                                <HiMinus onClick={()=>{setclick(false)}} className={`${click ? 'flex':'hidden'}`}/>
                        </div>
                    </div>
                </div>
                {/* more */}
                <div className={`${click ? 'flex':'hidden'} text-xs mt-2`}>
                    <p>
                    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </div>
            </div>
        </div>
        
        <div className='flex flex-col '>
            <div className={`${click2 ? 'bg-greenLight':'bg-whiteMlike'} rounded-xl p-4 transition ease-in-out  border-b-4 border`}>
                {/* header */}
                <div>
                    <div className=' border-b flex items-center justify-between w-full pb-2'>
                        <div className="flex gap-3 items-center">
                        <p className="font-semibold text-2xl">02</p>
                        <p className="font-semibold">Consultation</p>
                        </div>
                        {/* button */}
                        <div className="border rounded-2xl p-1 bg-white ">
                            <HiOutlinePlusSm  onClick={()=>{setclick2(true)}} className={`${click2 ? 'hidden':'flex'} `}/>
                                <HiMinus onClick={()=>{setclick2(false)}} className={`${click2 ? 'flex':'hidden'}`}/>
                        </div>
                    </div>
                </div>
                {/* more */}
                <div className={`${click2 ? 'flex':'hidden'} text-xs mt-2`}>
                    <p>
                    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </div>
            </div>
        </div>

        <div className='flex flex-col '>
            <div className={`${click3 ? 'bg-greenLight':'bg-whiteMlike'} rounded-xl p-4 transition ease-in-out  border-b-4 border`}>
                {/* header */}
                <div>
                    <div className=' border-b flex items-center justify-between w-full pb-2'>
                        <div className="flex gap-3 items-center">
                        <p className="font-semibold text-2xl">03</p>
                        <p className="font-semibold">Consultation</p>
                        </div>
                        {/* button */}
                        <div className="border rounded-2xl p-1 bg-white ">
                            <HiOutlinePlusSm  onClick={()=>{setclick3(true)}} className={`${click3 ? 'hidden':'flex'} `}/>
                                <HiMinus onClick={()=>{setclick3(false)}} className={`${click3 ? 'flex':'hidden'}`}/>
                        </div>
                    </div>
                </div>
                {/* more */}
                <div className={`${click3 ? 'flex':'hidden'} text-xs mt-2`}>
                    <p>
                    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </div>
            </div>
        </div>


        <div className='flex flex-col '>
            <div className={`${click4 ? 'bg-greenLight':'bg-whiteMlike'} rounded-xl p-4 transition ease-in-out  border-b-4 border`}>
                {/* header */}
                <div>
                    <div className=' border-b flex items-center justify-between w-full pb-2'>
                        <div className="flex gap-3 items-center">
                        <p className="font-semibold text-2xl">04</p>
                        <p className="font-semibold">Consultation</p>
                        </div>
                        {/* button */}
                        <div className="border rounded-2xl p-1 bg-white ">
                            <HiOutlinePlusSm  onClick={()=>{setclick4(true)}} className={`${click4 ? 'hidden':'flex'} `}/>
                                <HiMinus onClick={()=>{setclick4(false)}} className={`${click4 ? 'flex':'hidden'}`}/>
                        </div>
                    </div>
                </div>
                {/* more */}
                <div className={`${click4 ? 'flex':'hidden'} text-xs mt-2`}>
                    <p>
                    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </div>
            </div>
        </div>

        <div className='flex flex-col '>
            <div className={`${click5 ? 'bg-greenLight':'bg-whiteMlike'} rounded-xl p-4 transition ease-in-out  border-b-4 border`}>
                {/* header */}
                <div>
                    <div className=' border-b flex items-center justify-between w-full pb-2'>
                        <div className="flex gap-3 items-center">
                        <p className="font-semibold text-2xl">05</p>
                        <p className="font-semibold">Consultation</p>
                        </div>
                        {/* button */}
                        <div className="border rounded-2xl p-1 bg-white ">
                            <HiOutlinePlusSm  onClick={()=>{setclick5(true)}} className={`${click5 ? 'hidden':'flex'} `}/>
                                <HiMinus onClick={()=>{setclick5(false)}} className={`${click5 ? 'flex':'hidden'}`}/>
                        </div>
                    </div>
                </div>
                {/* more */}
                <div className={`${click5 ? 'flex':'hidden'} text-xs mt-2`}>
                    <p>
                    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </div>
            </div>
        </div>

        <div className='flex flex-col '>
            <div className={`${click6 ? 'bg-greenLight':'bg-whiteMlike'} rounded-xl p-4 transition ease-in-out  border-b-4 border`}>
                {/* header */}
                <div>
                    <div className=' border-b flex items-center justify-between w-full pb-2'>
                        <div className="flex gap-3 items-center">
                        <p className="font-semibold text-2xl">06</p>
                        <p className="font-semibold">Consultation</p>
                        </div>
                        {/* button */}
                        <div className="border rounded-2xl p-1 bg-white ">
                            <HiOutlinePlusSm  onClick={()=>{setclick6(true)}} className={`${click6 ? 'hidden':'flex'} `}/>
                                <HiMinus onClick={()=>{setclick6(false)}} className={`${click6 ? 'flex':'hidden'}`}/>
                        </div>
                    </div>
                </div>
                {/* more */}
                <div className={`${click6 ? 'flex':'hidden'} text-xs mt-2`}>
                    <p>
                    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Procses
