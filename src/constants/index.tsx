import { link } from "fs";
import { BiSolidDownArrow } from "react-icons/bi";

export const navLinks = [
  { id: "link-1", title: "Home", link: "/" },
  { id: "link-2", title: "About", link: "/" },
  { id: "link-3", title: "How to Buy", link: "/" },
  { id: "link-4", title: "Tokenomics", link: "/" },
  { id: "link-5", title: "Roadmap", link: "/" },
  { id: "link-6", title: "FAQ", link: "/" },
];

export const HowtoBuy = [
  { id: "howtobuy-1", number: 1, span: "GET A WALLET", desc: "First, you need a compatible wallet to store $KAIRO. We recommend using Phantom for ease of use and security" },
  { id: "howtobuy-2", number: 2, span: "BUY SOLANA", desc: "To acquire $KAIRO, you’ll need solana in your phantom wallet. Purchase solana from major cryptocurrency exchanges like Binance or Kraken" },
  { id: "howtobuy-3", number: 3, span: "ADD $KAIRO TO YOUR WALLET", desc: "Enter the amount of solana you wnat to exchange for $KAIRO and confirm the transaction. Add $KAIRO contract afterwards to view your token balance" },
  { id: "howtobuy-4", number: 4, span: "CHECK YOUR WALLET", desc: "Now, there you have it!" },
];

export const faq = [
  { id: "faq-1", desc: "WHAT CHAIN IS $KAIRO DEPLOYED?", arrow: <BiSolidDownArrow /> },
  { id: "faq-2", desc: "HOW TO JOIN PRESALE?", arrow: <BiSolidDownArrow /> },
  { id: "faq-3", desc: "WHEN IS PRESALE ENDING?", arrow: <BiSolidDownArrow /> },
  { id: "faq-4", desc: "HOW DO I BUY THE TOKEN?", arrow: <BiSolidDownArrow /> },
];

export const RoadmapPhase = [
  {id: "RoadmapPhase-1", header: "PHASE 1", span: "Get listed on exchanges", span2: "Get to 1000 Holders"},
  {id: "RoadmapPhase-2", header: "PHASE 2", span: "Kickstart with marketing", span2: "Get to 10,000 Holders"},
  {id: "RoadmapPhase-3", header: "PHASE 3", span: "Listing on more exchanges", span2: "Get it trending everywhere"},
]

export const  Token = [
  {id: "Token-1", span: "Liquidity", percent: "50%"},
  {id: "Token-2", span: "Presale", percent: "24%"},
  {id: "Token-3", span: "Marketing", percent: "14%"},
  {id: "Token-4", span: "Team", percent: "12%"},
]
