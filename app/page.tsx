import { HomeCta } from "@/components/home/home-cta";
import { HomeHero } from "@/components/home/home-hero";
import { HomeMetrics } from "@/components/home/home-metrics";
import { HomeProcess } from "@/components/home/home-process";
import { HomeProjects } from "@/components/home/home-projects";
import { HomeServices } from "@/components/home/home-services";
import { HomeTrust } from "@/components/home/home-trust";

export default function HomePage() {
  return (
    <div className="bg-[#F8FAFC] text-[#102033]">
      <HomeHero />
      <HomeMetrics />
      <HomeServices />
      <HomeProcess />
      <HomeProjects />
      <HomeTrust />
      <HomeCta />
    </div>
  );
}
