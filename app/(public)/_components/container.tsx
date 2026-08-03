import { Header } from "@/app/(public)/_components/sections/Header";
import { HeroSection } from "@/app/(public)/_components/sections/HeroSection";
import { ServicesGrid } from "@/app/(public)/_components/sections/ServicesGrid";
import { FeaturesSection } from "@/app/(public)/_components/sections/FeaturesSection";
import { HowToOrder } from "@/app/(public)/_components/sections/HowToOrder";
import { Partners } from "@/app/(public)/_components/sections/Partners";
import { FAQ } from "@/app/(public)/_components/sections/FAQ";
import { Promos } from "@/app/(public)/_components/sections/Promos";
import { Footer } from "@/app/(public)/_components/sections/Footer";
import { Chatbot } from "@/components/Chatbot";

export default function Container() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection />
        <ServicesGrid />
        <FeaturesSection />
        <HowToOrder />
        <Partners />
        <FAQ />
        <Promos />
      </main>
      <Chatbot />
    </>
  );
}
