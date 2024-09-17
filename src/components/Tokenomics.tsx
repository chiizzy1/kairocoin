import { Chart } from "@/assets";
import { tokenomics, tokensCard } from "@/constants";
import Image from "next/image";
import { FC } from "react";

interface TokenomicsProps {}

const Tokenomics: FC<TokenomicsProps> = ({}) => {
  let delay = 300;
  return (
    <section id="tokenomics" className="py-[120px]">
      <div className="container max-w-[1360px] mx-auto w-full">
        <div className="flex flex-col items-center gap-[40px]">
          <h3 className="header-text text-center text-black font-blacknorthdemo uppercase">Tokenomics</h3>
          <div className="flex flex-col w-full gap-[48px]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-[40px]">
              <div data-aos="zoom-in-right" className="flex items-center justify-center">
                <Image src={Chart} alt="chart" />
              </div>
              <div data-aos="zoom-in-left" className="flex flex-col gap-[32px]">
                {tokenomics.map(({ id, title, percent }) => (
                  <div key={id} className="flex items-center justify-between gap-[29px]">
                    <span className="text-[24px] leading-[32.78px] -tracking-[3%] font-semibold text-black">{title}</span>
                    <span className="text-[32px] leading-[31.3px] -tracking-[2.5%] font-blacknorthdemo text-black">
                      {percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px]">
              {tokensCard.map(({ id, bgImg, title, description }) => {
                delay += 300;
                return (
                  <div
                    data-aos="zoom-in-up"
                    data-aos-delay={delay}
                    className="bg-center bg-cover bg-no-repeat w-[260px] h-[160px]"
                    style={{ backgroundImage: `url(${bgImg.src})` }}
                    key={id}
                  >
                    <div className={`flex flex-col gap-2 justify-center pl-[40px] h-full w-full`}>
                      <span className="text-[24px] leading-[23.47px] font-blacknorthdemo text-black">{title}</span>
                      <span className="text-[14px] leading-[19px] -tracking-[5%] max-w-[148px] text-black break-words">
                        {description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
