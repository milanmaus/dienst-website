import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Platform } from "@/components/sections/Platform";
import { Pipeline } from "@/components/sections/Pipeline";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <Platform />
      <Pipeline />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  );
}
