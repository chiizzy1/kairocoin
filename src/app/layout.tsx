import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], });

const blacknorthdemo = localFont({
  src: "./fonts/blacknorthdemo.otf",
  variable: "--font-blacknorthdemo",
});

export const metadata: Metadata = {
  title: "KairoCoin",
  description: "The future of finance with a coin that embodies both the rich history of Cairo and the cutting-edge potential of the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-white", manrope.className, blacknorthdemo.variable)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
