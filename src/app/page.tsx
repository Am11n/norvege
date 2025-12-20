import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/sections/HeroSection";
import { generateMetadata as generateSEOMetadata, generateVideoSchema } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";

// Lazy load heavy sections below the fold
const StatsSection = dynamic(() => import("@/sections/StatsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const RareEarthSection = dynamic(() => import("@/sections/RareEarthSection"), {
  loading: () => <div className="min-h-[600px]" />,
});

const ProjectsTeaser = dynamic(() => import("@/sections/ProjectsTeaser"), {
  loading: () => <div className="min-h-[500px]" />,
});

const BlockchainSection = dynamic(() => import("@/sections/BlockchainSection"), {
  loading: () => <div className="min-h-[600px]" />,
});

const NorChainSection = dynamic(() => import("@/sections/NorChainSection"), {
  loading: () => <div className="min-h-[500px]" />,
});

const ContactStrip = dynamic(() => import("@/sections/ContactStrip"), {
  loading: () => <div className="min-h-[300px]" />,
});

export const metadata: Metadata = generateSEOMetadata({
  title: "Norvege Minerals - Science-Driven Discovery",
  description:
    "Norwegian exploration company focused on sustainable mineral development and critical minerals for the energy transition. 72 exploration licenses across 2,400 km² in Norway. Discover rare earth elements, zinc, copper, and strategic minerals.",
  path: "/",
  keywords: [
    "Norvege Minerals",
    "Norwegian mining",
    "mineral exploration",
    "rare earth elements",
    "critical minerals",
    "sustainable mining",
    "mining Norway",
    "exploration licenses",
    "REE",
    "zinc mining",
    "copper mining",
  ],
});

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no";

  // Video schema for hero video
  const videoSchema = generateVideoSchema({
    name: "Minerals inside mountains - mining exploration",
    description:
      "Exploring the depths of Norway's mountains to uncover critical minerals essential for Europe's green transition.",
    thumbnailUrl: `${siteUrl}/images/hero/01.jpg`,
    contentUrl: `${siteUrl}/videos/mining.mp4`,
    uploadDate: "2024-01-01",
  });

  return (
    <>
      <StructuredData data={videoSchema} />
      <HeroSection />
      <StatsSection />
      <RareEarthSection />
      <ProjectsTeaser />
      <BlockchainSection />
      <NorChainSection />
      <ContactStrip />
    </>
  );
}
