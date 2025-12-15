import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";
import ProjectsTeaser from "@/sections/ProjectsTeaser";
import ESGTeaser from "@/sections/ESGTeaser";
import StrategicVision from "@/sections/StrategicVision";
import InvestorCTA from "@/sections/InvestorCTA";
import ContactStrip from "@/sections/ContactStrip";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsTeaser />
      <ESGTeaser />
      <StrategicVision />
      <InvestorCTA />
      <ContactStrip />
    </>
  );
}
