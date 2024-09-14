"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";
import { Logo } from "@/assets";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Discover");



  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all ease-in-out`}>
      <div className="container mx-auto w-full">
        <div className="flex justify-between items-center transition py-[40px]">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-[40px] h-[40px]" />
          </Link>

          <div className="flex items-center gap-[36px]">
            {navLinks.map(({ id, title, link }) => (
              <ul key={id}>
                <Link href={link} onClick={() => setActive(title)}>
                  <span
                    className={`text-[14px] leading-[14px] font-semibold font-laila ${
                      active === title ? "text-primary underline underline-offset-8" : "text-black"
                    }`}
                  >
                    {title}
                  </span>
                </Link>
              </ul>
            ))}
          </div>

          <div className="flex items-center gap-[24px]">
            <button className="bg-white border-2 border-black w-[110px] h-[46px]">
              <span className="text-[14px] font-bold">Buy presale</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
