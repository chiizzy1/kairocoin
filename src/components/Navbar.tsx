"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";
import { Logo } from "@/assets";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
        stickyClass ? "bg-primary/90 backdrop-blur-sm border-b border-slate-300 shadow-lg" : ""
      }`}
    >
      <div className="container max-w-[1360px] mx-auto w-full">
        <div className="flex w-full justify-between items-center py-4">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>

          <div className="hidden lg:flex items-center gap-[36px]">
            {navLinks.map(({ id, title, link }) => (
              <ul key={id}>
                <Link href={`#${id}`} onClick={() => setActive(title)}>
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

          <Button className="uppercase hidden lg:block">Buy Presale</Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center rounded-lg p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        {menuOpen ? (
          <div className="flex flex-col items-center gap-6 py-4 lg:hidden">
            <div className="flex flex-col items-center gap-[10px]">
              {navLinks.map(({ id, title, link }) => (
                <ul key={id}>
                  <Link href={`#${id}`} onClick={() => setActive(title)}>
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
            <Button className="uppercase w-full max-w-[390px]">Buy Presale</Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;