"use client"
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import IntegratePicept from "@/components/IntegratePicept";
import LlmApplications from "@/components/LlmApplications";
import OverviewData from "@/components/OverviewData";
import Performance from "@/components/Performance";
import PiceptDeliver from "@/components/PiceptDeliver";
import PiceptRated from "@/components/PiceptRated";
import SwitchRisk from "@/components/SwitchRisk";
import TrustedDeveloper from "@/components/TrustedDeveloper";
import UniverseApi from "@/components/UniverseApi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GetIntoTouch from "@/components/GetIntoTouch";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
    });
  }, []);
  return (
    <main className="bg-rich-black overflow-clip">
      <Hero />
      <TrustedDeveloper />
      <OverviewData />
      <IntegratePicept />
      <UniverseApi />
      <Performance />
      <SwitchRisk />
      <LlmApplications />
      <PiceptDeliver />
      <PiceptRated />
      <GetIntoTouch />
      <Footer />
      <BackToTop />
    </main>
  );
}
