import Image from "next/image";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import SubHeroSection from "@/components/SubHeroSection";
import AboutSection from "@/components/AboutSection";
import Count from "@/components/Count";
import ClientsStory from "@/components/ClientsStory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
