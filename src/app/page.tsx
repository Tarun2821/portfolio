import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import AboutHome from "@/sections/Abouthome";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <AboutHome />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <FooterSection />
    </>
  );
}
