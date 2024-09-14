import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowToBuy from "@/components/HowToBuy";
import RoadMap from "@/components/RoadMap";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <HowToBuy />
      <RoadMap />
      <Tokenomics />
      <FAQ />
    </main>
  );
}
