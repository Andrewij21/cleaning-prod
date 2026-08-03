import { AboutHero } from "@/app/(public)/about/_components/AboutHero";
import { AboutStats } from "@/app/(public)/about/_components/AboutStats";
import { Timeline } from "@/app/(public)/about/_components/Timeline";
import { OurStory } from "@/app/(public)/about/_components/OurStory";
import { JoinUs } from "@/app/(public)/about/_components/JoinUs";
import { VisionMission } from "./_components/VisionMission";

export const metadata = {
  title: "Tentang KliknClean - Jasa Kebersihan Terpercaya",
  description:
    "Pelajari tentang KliknClean, layanan kebersihan profesional yang tersedia di 9+ kota Indonesia.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <VisionMission />
      <AboutStats />
      <Timeline />
      <OurStory />
      <JoinUs />
    </main>
  );
}
