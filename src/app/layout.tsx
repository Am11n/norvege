import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NORVEGE MINERALS AS - Critical Minerals for the Energy Transition",
  description:
    "Norwegian mining company focused on sustainable exploration and development of critical minerals. Exploring mineral resources across Norway for the energy transition.",
  keywords: ["mining", "minerals", "Norway", "critical minerals", "sustainable mining", "ESG"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
