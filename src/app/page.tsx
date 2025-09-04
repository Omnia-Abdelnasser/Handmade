import About from "@/sections/about";
import ContactSection from "@/sections/contact";
import Hero from "@/sections/home";
import Manadeels from "@/sections/madeel";
import Section2 from "@/sections/section2";
import Section3 from "@/sections/section3";
import Section4 from "@/sections/section4";
import Section5 from "@/sections/section5";
import Section6 from "@/sections/section6";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Manadeels />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <ContactSection />
    </>
  );
}
