import { FC } from "react";
import { roadmapPhase } from "@/constants";
import Image from "next/image";
import { CircleIcon, Phase } from "@/assets";
interface RoadMapProps {}

const RoadMap: FC<RoadMapProps> = ({}) => {
  return (
    <section id="roadmap" className="py-[64px] bg-tertiary rounded-[64px]">
      <div className="container max-w-[1360px] mx-auto w-full">
        <div className="flex flex-col items-center gap-[64px]">
          <h3 className="header-text text-center font-blacknorthdemo uppercase">Roadmap</h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-[80px]">
            {roadmapPhase.map(({ id, title, item, item2, animate }) => (
              <div
                data-aos={animate}
                data-aos-delay={"300"}
                key={id}
                className="w-[240px] h-[255px] bg-black rounded-[8px] px-[20px] pb-[12px] pt-[23px]"
              >
                <div className="border-dashed border-white border border-t-0 h-full w-full relative">
                  <div className="absolute -top-[18%] left-[15%]">
                    <div
                      className="bg-center bg-cover bg-no-repeat w-[137px] h-[54.13px] rounded-[15px]"
                      style={{ backgroundImage: `url(${Phase.src})` }}
                    >
                      <div className="flex items-center justify-center h-full w-full">
                        <span className="text-[18px] leading-[17.6px] text-center font-blacknorthdemo text-black">{title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[21px] px-[6px] flex items-center justify-center">
                    <ul className="p-[10px] list-disc">
                      <li className="text-[12px] leading-[16.4px] -tracking-[2.5%] text-white">{item}</li>
                      <li className="text-[12px] leading-[16.4px] -tracking-[2.5%] text-white mt-4">{item2}</li>
                    </ul>
                  </div>
                  <Image src={CircleIcon} alt="icon" className="absolute -top-[5%] -left-[3%]" />
                  <Image src={CircleIcon} alt="icon" className="absolute -top-[5%] -right-[3%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
