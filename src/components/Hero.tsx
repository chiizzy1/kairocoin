import { FC } from "react";
import Image from "next/image";
import { HeroImage, Nabox, Techopedia, Binance, Gotham, } from "@/assets";


interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="pt-[204px] pb-[114px] z-[1] bg-BlueBg">
      <div className="container mx-auto w-full relative flex">
           {/* Hero Write Up */}
        <div className="flex gap-[80px] w-full max-w-[734px]">
          <div className="flex flex-col gap-[32px] w-[701px]">
            <h1 className="text-6xl font-extrabold leading-[75.6px] tracking-[10%] text-black font-detacher">
               Kairocoin
            </h1>
            <p className="text-[14px] leading-[30px] w-[679px] font-medium tracking-[6%] text-black font-laila">
               Whether you’re a seasoned investor or a curious newbie, KairoCoin invites you to join its journey of exploration and growth.
               Dive into the future of finance with a coin that embodies both the rich history of Cairo and the cutting-edge potential of the digital age. 
               Let KairoCoin lead the way in the exciting realm of memecoins!
            </p>
            <div className="space-x-10 text-[14px] font-bold">
              <button className="bg-white border-2 border-black w-[110px] h-[46px]">
                <span className="">WHITEPAPER</span>
              </button>
              <button className="bg-white border-2 border-black w-[100px] h-[46px]">
                <span className="">AUDIT</span>
              </button>
            </div>
          </div>
        </div>
        
           {/* Kairo presale */}
        <div className="mt-[34rem]">
          <Image src={HeroImage} width={350} height={350} alt="hero image" className="hidden lg:block absolute bottom-0 right-0 mr-[24rem]" />
        </div>
        
      </div>

          {/* Patnerships */}

      <div className="container mx-auto w-full relative mt-5 space-y-5 -mb-20">
          <span className="text-white text-[14px]">Featured In</span>
          <div className="flex items-center justify-between gap-[53px]">
            <Image src={Nabox} width={135} height={40} alt="" className="" />
            <Image src={Gotham} width={135} height={40} alt="" className="" />
            <Image src={Techopedia} width={135} height={40} alt="" className="" />
            <Image src={Binance} width={135} height={40} alt="" className="" />
          </div>
      </div>
    </section>
  );
};

export default Hero;
