import Image from "next/image";
import { Inter } from "next/font/google";

import Bannerimages from "@/components/Banner/Bannerimages";
//import Categoryinfo from "@/components/Categorydetails/Categoryinfo";
import Navbar from "@/components/Newnavbar";
import Categoryinfo from "@/components/Categorydetails/Categoryinfo";
import Checkoutpreview from "@/components/checkoutpreview/Checkoutpreview";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Bannerimages />
      <Categoryinfo />
      <Checkoutpreview />
    </>
  );
}
