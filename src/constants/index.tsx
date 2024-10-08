import {
  Binance,
  BlueBg,
  BnbIcon,
  BrownBg,
  EthLogo,
  Gotham,
  Nabox,
  PolygonIcon,
  SolanaIcon,
  Techopedia,
  YellowBg,
} from "@/assets";
import { BiSolidDownArrow } from "react-icons/bi";

export const navLinks = [
  { id: "home", title: "Home", link: "/" },
  { id: "about", title: "About", link: "/" },
  { id: "buy", title: "How to Buy", link: "/" },
  { id: "roadmap", title: "Roadmap", link: "/" },
  { id: "tokenomics", title: "Tokenomics", link: "/" },
  { id: "faq", title: "FAQ", link: "/" },
];

export const HowtoBuy = [
  {
    id: "howtobuy-1",
    animate: "fade-down-right",
    number: 1,
    span: "GET A WALLET",
    desc: "First, you need a compatible wallet to store $KAIRO. We recommend using Phantom for ease of use and security",
  },
  {
    id: "howtobuy-2",
    animate: "fade-down-left",
    number: 2,
    span: "BUY SOLANA",
    desc: "To acquire $KAIRO, you’ll need solana in your phantom wallet. Purchase solana from major cryptocurrency exchanges like Binance or Kraken",
  },
  {
    id: "howtobuy-3",
    animate: "fade-up-right",
    number: 3,
    span: "ADD $KAIRO TO YOUR WALLET",
    desc: "Enter the amount of solana you wnat to exchange for $KAIRO and confirm the transaction. Add $KAIRO contract afterwards to view your token balance",
  },
  { id: "howtobuy-4", animate: "fade-up-left", number: 4, span: "CHECK YOUR WALLET", desc: "Now, there you have it!" },
];

export const faq = [
  { id: "faq-1", title: "WHAT CHAIN IS $KAIRO DEPLOYED?", content: "Hello display a content here" },
  { id: "faq-2", title: "HOW TO JOIN PRESALE?", content: "Hello display a content here" },
  { id: "faq-3", title: "WHEN IS PRESALE ENDING?", content: "Hello display a content here" },
  { id: "faq-4", title: "HOW DO I BUY THE TOKEN?", content: "Hello display a content here" },
];

export const roadmapPhase = [
  { id: "RoadmapPhase-1", animate: "flip-left", title: "PHASE 1", item: "Get listed on exchanges", item2: "Get to 1000 Holders" },
  {
    id: "RoadmapPhase-2",
    animate: "flip-up",
    title: "PHASE 2",
    item: "Kickstart with marketing",
    item2: "Get to 10,000 Holders",
  },
  {
    id: "RoadmapPhase-3",
    animate: "flip-right",
    title: "PHASE 3",
    item: "Listing on more exchanges",
    item2: "Get it trending everywhere",
  },
];

export const tokenomics = [
  { id: "Token-1", title: "Liquidity", percent: "50%" },
  { id: "Token-2", title: "Presale", percent: "24%" },
  { id: "Token-3", title: "Marketing", percent: "14%" },
  { id: "Token-4", title: "Team", percent: "12%" },
];

export const sponsors = [
  { id: "sponsor-1", logo: Nabox },
  { id: "sponsor-2", logo: Gotham },
  { id: "sponsor-3", logo: Techopedia },
  { id: "sponsor-4", logo: Binance },
];

export const tokensCard = [
  { id: "card-", title: "token supply", description: "1,000,000,000", bgImg: BlueBg },
  { id: "card-", title: "token symbol", description: "$KAIRO", bgImg: BrownBg },
  { id: "card-", title: "Token address", description: "0x7B8C1d3FCA7Ff19F841D3C1D12B2ABAB1E4aF7B2", bgImg: YellowBg },
];

export const chains = [
  { id: "i", icon: EthLogo, name: 'ETH' },
  { id: "i", icon: SolanaIcon, name: 'SOL' },
  { id: "i", icon: BnbIcon, name: 'BNB' },
  { id: "i", icon: PolygonIcon, name: 'MATIC' },
];
