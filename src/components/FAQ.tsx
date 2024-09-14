import React from 'react'
import { faq } from '@/constants'
const FAQ: React.FC = () => {
  return (
    <section className='pt-[204px] z-[1] bg-BlueBg'>
      <div className='container mx-auto w-full relative h-[697px] grid gap-[36]'>
         <div className="text-center -mt-24">
            <span className='font-bold text-[40px] text-black'>FAQ</span>
         </div>
         <div className="w-[697px] h-[332px] grid gap-[40] ml-[16rem]">
            {faq.map(({ id, desc, arrow}) => (
                <div key={id} className="">
                    <div className="flex justify-between text-center bg-black text-white w-[693px] h-[66px] p-[24px]">
                        <div className="">
                           <p className="text-[18px] font-semibold">{desc}</p>
                        </div>
                        <div className="">
                           <span className="text-[18px] font-semibold">{arrow}</span>
                        </div>
                    </div>
                </div>
            ))}
         </div>
         <div className="w-[1440p] h-[0px] grid gap-5">
            <hr className='border border-Line -ml-32 -mr-32'/>
            <div className="text-center">
               <span className='text-[14px] font-semibold'>
                 <span className=' text-lg p-1'> &copy; </span>
                 <span className='text-base'> 2024 By Kairo. All right reserved! </span>
               </span>
            </div>
         </div>
      </div>
    </section>
  )
}

export default FAQ
