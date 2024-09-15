"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";
import { Logo } from "@/assets";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Home");

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  ${
        stickyClass ? "bg-white/20 backdrop-blur-sm border-b border-slate-300 shadow-lg" : ""
      }`}
    >
      <div className="container max-w-6xl mx-auto w-full">
        <div className="flex w-full justify-between items-center py-4">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>

          <div className="flex items-center gap-[36px]">
            {navLinks.map(({ id, title, link }) => (
              <ul key={id}>
                <Link href={link} onClick={() => setActive(title)}>
                  <span
                    className={`text-[14px] leading-[19.1px] font-semibold ${
                      active === title ? "text-secondary underline underline-offset-8" : "text-black"
                    }`}
                  >
                    {title}
                  </span>
                </Link>
              </ul>
            ))}
          </div>

          <Button className="uppercase">Buy Presale</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
