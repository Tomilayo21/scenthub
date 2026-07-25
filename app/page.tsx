import type { Metadata } from "next";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import SubHeroSection from "@/components/SubHeroSection";
import AboutSection from "@/components/AboutSection";
import Count from "@/components/Count";
import ClientsStory from "@/components/ClientsStory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Scenthub Realty & Construction Limited delivers premium construction, renovation, and real estate solutions in Nigeria.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <SubHeroSection />
      <AboutSection />
      <Count />
      <ClientsStory />
      <Contact />
      <Footer />
    </>
  );
}
