import { FC } from "react";
import Image from "next/image";
import { HeroImage, EthLogo, Logo } from "@/assets";
import { Button } from "./ui/Button";
import { sponsors } from "@/constants";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section id="hero" className="pt-[118px] bg-primary">
      <div className="container max-w-[1360px] mx-auto w-full">
        <div className="flex flex-col gap-[40px] lg:gap-[387px] pt-0 lg:pt-[100px] pb-[40px] relative">
          <div data-aos="zoom-in-right" className="flex flex-col items-center lg:items-start gap-[40px] w-full">
            <h1 className="text-[72px] md:text-[90px] font-extrabold leading-[70px] tracking-[10%] md:leading-[75.6px] md:tracking-[10%] text-black font-blacknorthdemo">
              Kairocoin
            </h1>
            <p className="text-[14px] leading-[19.2px] text-black text-center lg:text-left max-w-[701px]">
              Whether you’re a seasoned investor or a curious newbie, KairoCoin invites you to join its journey of exploration and
              growth. Dive into the future of finance with a coin that embodies both the rich history of Cairo and the
              cutting-edge potential of the digital age. Let KairoCoin lead the way in the exciting realm of memecoins!
            </p>
            <div className="flex items-center gap-[40px]">
              <Button className="uppercase">Whitepaper</Button>
              <Button className="uppercase">AUDIT</Button>
            </div>
          </div>

          {/* Calculator Card */}
          <div data-aos="zoom-in-left" className="lg:absolute flex items-center justify-center lg:right-0 lg:top-0">
            <div className="relative z-[1]">
              <div className="flex flex-col py-[40px] gap-[24px] md:gap-[40px] px-[40px] w-full max-w-[500px] bg-tertiary border border-black">
                <h2 className="text-[24px] leading-[23.4px] text-center font-blacknorthdemo text-black">Kairo presale</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-[40px] leading-[54.64px] font-semibold text-black">00:</span>
                        <span className="text-[14px] leading-[19.2px] text-center text-black">Days</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[40px] leading-[54.64px] font-semibold text-black">00:</span>
                        <span className="text-[14px] leading-[19.2px] text-center text-black">Hours</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[40px] leading-[54.64px] font-semibold text-black">00:</span>
                        <span className="text-[14px] leading-[19.2px] text-center text-black">Minutes</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[40px] leading-[54.64px] font-semibold text-black">00</span>
                        <span className="text-[14px] leading-[19.2px] text-center text-black">Seconds</span>
                      </div>
                    </div>
                    <span className="text-[14px] leading-[19.2px] text-center font-bold text-black">
                      UNTIL NEXT PRICE INCREASE
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="w-full h-[7.2px] md:h-[12px] rounded-[15px] brown">
                      <div className="h-full bg-black w-[30%] rounded-[15px]" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[14px] leading-[19.2px] text-center font-bold text-black">$358,000</span>
                      <span className="text-[14px] leading-[19.2px] text-center font-bold text-black">of</span>
                      <span className="text-[14px] leading-[19.2px] text-center font-bold text-black">$1,000,000</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[40px]">
                  <div className="flex items-center justify-center gap-[30px] md:gap-[57px]">
                    <Button variant="yellow" size="yellow">
                      Pay with Crypto
                    </Button>
                    <Button variant="yellow" size="yellow">
                      Pay with Card
                    </Button>
                  </div>

                  <div className="flex flex-col gap-[37px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] leading-[16.4px] font-bold text-black">You Pay</span>
                        <span className="text-[12px] leading-[16.4px] font-bold text-black">Available $ETH= 2.5ETH</span>
                      </div>
                      <div className="flex items-center py-2 px-4 w-full bg-white border border-black">
                        <Image src={EthLogo} alt="eth logo" />
                        <input
                          className="border-none w-full outline-none h-[30px] lg:h-[48px] md:h-[40px] bg-transparent text-[12px] leading-[16.4px] text-black text-end"
                          placeholder="0.OOETH"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] leading-[16.4px] font-bold text-black">You Receive</span>
                        <span className="text-[12px] leading-[16.4px] font-bold text-black">Available $ETH= 2.5ETH</span>
                      </div>
                      <div className="flex items-center py-2 px-4 w-full bg-white border border-black">
                        <Image src={Logo} alt="eth logo" />
                        <input
                          className="border-none w-full outline-none h-[30px] lg:h-[48px] md:h-[40px] bg-transparent text-[12px] leading-[16.4px] text-black text-end"
                          placeholder="0.OOETH"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="blue" size="blue" className="w-full">
                  BUY KAIRO
                </Button>
              </div>

              <Image src={HeroImage} alt="hero image" className="hidden lg:block absolute bottom-0 -left-[70%] z-[-1]" />
            </div>
          </div>

          <div data-aos="zoom-in" className="flex flex-col gap-6">
            <span className="text-[18px] leading-[24.5px] -tracking-[2.5%] text-white">Featured In</span>
            <div className="flex items-center justify-between">
              {sponsors.map(({ id, logo }) => (
                <div key={id}>
                  <Image src={logo} alt="sponsor logo" className="w-full max-w-[90px] h-[16px] lg:max-w-[199px] lg:h-[40px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
