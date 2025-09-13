import { Hero } from "@/components/sections/Hero";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <About />
      <FeaturedRooms />
      <Stats />
      <Testimonials />
    </div>
  );
}
