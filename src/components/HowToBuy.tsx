import React from 'react'
import { HowtoBuy } from "@/constants";

const HowToBuy: React.FC = () => {
  return (
    <section className='pt-[40px] pb-[114px] z-[1]'>
       <div className="container mx-auto w-full relative">
           <div className="text-center -mt-">
             <h3 className="font-bold text-[40px] text-black">HOW TO BUY</h3>
           </div>

           <div className="grid grid-cols-2 gap-10 text-center w-[790px] h-[328px] ml-[13rem] mt-20">
              {HowtoBuy.map(({ id, number, span, desc}) => (
                <div key={id} className="">
                  <div className='bg-BuyBg flex w-[380px] h-[170px] p-[32px] border'>
                    <div className="rounded-full bg-black w-[34px]  h-[26px]">
                        <span className="text-white w-[4px] text-sm font-semibold">{number}</span>
                    </div>
                    <div className="w-[271px] text-left ml-5 space-y-3">
                        <span className="text-[14px] font-bold">{span}</span>
                        <div className="w-[280px]">
                            <p className='text-[12px] font-medium'>{desc}</p>
                        </div>
                    </div>
                  </div>
                </div>

              ))}
           </div>
       </div>
    </section>
  )
}

export default HowToBuy
