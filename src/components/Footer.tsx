import { FC } from "react";
import { LuCopyright } from "react-icons/lu";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-primary">
      <hr className="border-t border-white w-full" />
      <div className="container max-w-[1360px] mx-auto w-full">
        <div className="flex items-center justify-center gap-6 py-[18px]">
          <LuCopyright size={32} className="text-black" />

          <span className="text-[14px] leading-[19.2px] -tracking-[3.5%] font-bold font-monumentExtended text-center text-black">
          {new Date().getFullYear()} By Kairo. All right reserved!
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
