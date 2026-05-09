import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Discovery from "@/components/Discovery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Portfolio />
      <Discovery />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
