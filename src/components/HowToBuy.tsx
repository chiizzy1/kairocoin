import React from "react";
import { HowtoBuy } from "@/constants";

const HowToBuy: React.FC = () => {
  let delay = 300;

  return (
    <section id="buy" className="py-[80px]">
      <div className="container max-w-[1360px] mx-auto w-full">
        <div className="flex flex-col items-center gap-[64px] py-0 lg:py-[40px]">
          <h3 className="text-[40px] leading-[39.2px] text-center font-blacknorthdemo uppercase">HOW TO BUY</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {HowtoBuy.map(({ id, number, span, desc, animate }) => {
              delay += 300;
              return (
                <div
                  data-aos={animate}
                  data-aos-delay={delay}
                  key={id}
                  className="flex gap-4 bg-secondary p-[32px] border border-black"
                >
                  <div className="rounded-full bg-black w-[24px] h-[24px] flex items-center justify-center">
                    <span className="text-[14px] leading-[13.7px] text-white font-blacknorthdemo">{number}</span>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-[14px] leading-[13.7px] font-blacknorthdemo">{span}</span>
                    <p className="text-[12px] leading-[16.4px] -tracking-[2.5] text-start max-w-[271px]">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
