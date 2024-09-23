"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { HeroImage, EthLogo, Logo, DropdownIcon } from "@/assets";
import { Button } from "./ui/Button";
import { chains, sponsors } from "@/constants";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeChainIndex, setActiveChainIndex] = useState(0);
  const [countdown, setCountdown] = useState(3 * 24 * 60 * 60); // Countdown in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 3 * 24 * 60 * 60; // Reset to 3 days
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(countdown / (24 * 60 * 60));
  const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  return (
    <section id="hero" className="pt-[118px] bg-primary">
      <div className="container max-w-[1360px] mx-auto w-full">
        <div className="flex flex-col gap-[40px] lg:gap-[387px] pt-0 lg:pt-[100px] pb-[40px] relative">
          <div data-aos="zoom-in-right" className="flex flex-col items-center lg:items-start gap-[40px] w-full">
            <h1 className="text-[64px] md:text-[90px] font-extrabold leading-[62.6px] tracking-[10%] md:leading-[88px] md:tracking-[10%] text-black font-blacknorthdemo">
              Kairocoin
            </h1>
            <p className="text-[12px] leading-[18px] md:text-[14px] md:leading-[19.2px] text-black text-center lg:text-left max-w-[446px] lg:max-w-[580px] xl:max-w-[700px]">
              Whether you`&apos;`re a seasoned investor or a curious newbie, KairoCoin invites you to join its journey of exploration and
              growth. Dive into the future of finance with a coin that embodies both the rich history of Cairo and the
              cutting-edge potential of the digital age. Let KairoCoin lead the way in the exciting realm of memecoins!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-[24px] md:gap-[40px] w-full sm:w-fit">
              <Button className="uppercase w-full sm:w-[107px]">Whitepaper</Button>
              <Button className="uppercase w-full sm:w-[107px]">AUDIT</Button>
            </div>
          </div>

          {/* Calculator Card */}
          <div
            data-aos="zoom-in-left"
            className="lg:absolute flex items-center justify-end sm:justify-center lg:right-0 lg:top-0"
          >
            <div className="relative z-[1]">
              <div className="flex flex-col py-[24px] md:py-[40px] gap-[24px] md:gap-[40px] px-[24px] md:px-[40px] w-full max-w-[500px] bg-tertiary border border-black">
                <h2 className="text-[14.4px] leading-[14px] md:text-[24px] md:leading-[23.4px] text-center font-blacknorthdemo text-black">
                  Kairo presale
                </h2>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-[24px] leading-[32.78px] md:text-[40px] md:leading-[54.64px] font-semibold text-black">
                          {String(days).padStart(2, '0')}:
                        </span>
                        <span className="text-[8.4px] leading-[11.47px] md:text-[14px] md:leading-[19.2px] text-center text-black">
                          Days
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[24px] leading-[32.78px] md:text-[40px] md:leading-[54.64px] font-semibold text-black">
                          {String(hours).padStart(2, '0')}:
                        </span>
                        <span className="text-[8.4px] leading-[11.47px] md:text-[14px] md:leading-[19.2px] text-center text-black">
                          Hours
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[24px] leading-[32.78px] md:text-[40px] md:leading-[54.64px] font-semibold text-black">
                          {String(minutes).padStart(2, '0')}:
                        </span>
                        <span className="text-[8.4px] leading-[11.47px] md:text-[14px] md:leading-[19.2px] text-center text-black">
                          Minutes
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[24px] leading-[32.78px] md:text-[40px] md:leading-[54.64px] font-semibold text-black">
                          {String(seconds).padStart(2, '0')}
                        </span>
                        <span className="text-[8.4px] leading-[11.47px] md:text-[14px] md:leading-[19.2px] text-center text-black">
                          Seconds
                        </span>
                      </div>
                    </div>
                    <span className="text-[8.4px] leading-[11.47px] md:text-[14px] md:leading-[19.2px] text-center font-bold text-black">
                      UNTIL NEXT PRICE INCREASE
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="w-full h-[7.2px] md:h-[12px] rounded-[15px] brown">
                      <div className="h-full bg-black w-[30%] rounded-[15px]" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="span-text">$358,000</span>
                      <span className="span-text">of</span>
                      <span className="span-text">$1,000,000</span>
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
                        <span className="tiny-text">You Pay</span>
                        <span className="tiny-text">Available $ETH= 2.5ETH</span>
                      </div>
                      <div className="flex items-center py-2 px-4 h-[30px] md:h-[48px] w-full bg-white border border-black relative">
                        <div onClick={toggleDropdown} className="flex items-center gap-2 cursor-pointer">
                          <Image
                            src={chains[activeChainIndex].icon}
                            alt="eth logo"
                            className="w-[19.2px] h-[19.2px] md:h-[32px] md:w-[32px]"
                          />
                          <Image src={DropdownIcon} alt="icon" />
                        </div>
                        <input
                          className="border-none w-full outline-none bg-transparent text-[7.2px] leading-[9.84px] md:text-[12px] md:leading-[16.4px] text-black text-end"
                          placeholder={`0.OO ${chains[activeChainIndex].name}`}
                        />

                        {dropdownOpen && ( // Render dropdown if open
                          <div className="absolute h-[65px] w-[80px] overflow-y-scroll scrollbar-hide left-0 -bottom-[110%] bg-white border border-black flex flex-col">
                            {chains.map(({ id, icon }, index) => (
                              <div
                                key={id}
                                className="cursor-pointer hover:bg-primary/20"
                                onClick={() => {
                                  setDropdownOpen(false);
                                  setActiveChainIndex(index);
                                }}
                              >
                                <div className="flex items-center justify-center">
                                  <Image src={icon} alt="sponsor logo" className="w-[32px] h-[32px]" />
                                </div>
                                {index < chains.length - 1 && ( // Add divider except for the last child
                                  <hr className="border-t border-gray-300" />
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="tiny-text">You Receive</span>
                        <span className="tiny-text">Available $ETH= 2.5ETH</span>
                      </div>
                      <div className="flex items-center h-[30px] md:h-[48px] py-2 px-4 w-full bg-white border border-black">
                        <Image src={Logo} alt="eth logo" className="w-[19.2px] h-[19.2px] md:h-[32px] md:w-[32px]" />
                        <input
                          className="border-none w-full outline-none bg-transparent text-[7.2px] leading-[9.84px] md:text-[12px] md:leading-[16.4px] text-black text-end"
                          placeholder="0.OO KAIRO"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="blue" size="blue" className="w-full span-text">
                  BUY KAIRO
                </Button>
              </div>

              <Image src={HeroImage} alt="hero image" className="absolute bottom-0 -left-[60%] md:-left-[70%] z-[-1]" />
            </div>
          </div>

          <div data-aos="zoom-in" className="flex flex-col gap-6">
            <span className="text-[9px] leading-[12.3px] md:text-[18px] md:leading-[24.5px] -tracking-[2.5%] text-white">
              Featured In
            </span>
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
