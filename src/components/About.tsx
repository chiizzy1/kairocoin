import { AboutImage } from '@/assets'
import Image from 'next/image'
import React from 'react'

const About: React.FC = () => {
  return (
    <section className='pt-[204px] pb-[114px] m-[50px] w-[1500px] -ml-0 z-[1] bg-black'>
      <div className="container mx-auto w-full relative">
         <div className="text-center -mt-40">
            <h3 className="text-white font-bold text-[40px]">ABOUT</h3>
         </div>

        <div className='flex h-[400px] '>
            <div className="flex flex-col gap-[32px] w-[701px] mt-32">
                <div className="">
                   <p className="text-white text-[18px] leading-[30px] w-[772px] font-light tracking-[6%] font-laila">
                     Meet KairoCoin, the memecoin mascot that’s sweeping the crypto world with charm and charisma! 
                     Inspired by the adventurous spirit of its namesake, Cairo, KairoCoin brings a touch of excitement 
                     and energy to the digital currency scene. With a sleek, modern logo and a playful personality, 
                     KairoCoin is not just another token—it’s a symbol of innovation and fun in the world of cryptocurrency.
                   </p>
                </div>
                
                <div className="space-x-10 text-[14px] font-bold">
                    <button className="bg-white border-2 border-black w-[110px] h-[46px]">
                      <span className="">TELEGRAM</span>
                    </button>
                    <button className="bg-white border-2 border-black w-[100px] h-[46px]">
                      <span className="">DISCORD</span>
                    </button>
                    <button className="bg-white border-2 border-black w-[100px] h-[46px]">
                      <span className="">TWITTER</span>
                    </button>
                </div>
            </div>

            <div className="ml-44 mt-10">
                <Image src={AboutImage} width={350} height={350} alt="" className="absolute" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
