import { AboutImage } from "@/assets";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/Button";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section className="py-[64px] bg-black">
      <div className="container max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center gap-[40px]">
          <h3 className="text-[40px] leading-[39.2px] text-center text-white font-blacknorthdemo uppercase">About</h3>

          <div className="relative py-[94.5px] w-full">
            <div className="flex flex-col gap-[40px]">
              <p className="text-[18px] leading-[24.5px] text-white -tracking-[2.5%] max-w-[772px]">
                Meet KairoCoin, the memecoin mascot that’s sweeping the crypto world with charm and charisma! Inspired by the
                adventurous spirit of its namesake, Cairo, KairoCoin brings a touch of excitement and energy to the digital
                currency scene. With a sleek, modern logo and a playful personality, KairoCoin is not just another token—it’s a
                symbol of innovation and fun in the world of cryptocurrency.
              </p>

              <div className="flex items-center gap-[40px]">
                <Button>Telegram</Button>
                <Button>Discord</Button>
                <Button>Twitter</Button>
              </div>
            </div>
            <Image src={AboutImage} alt="" className="absolute right-0 top-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
