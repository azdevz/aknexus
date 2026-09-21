import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Discovery from "@/components/Discovery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Enterprise AI & Digital Transformation Consulting | AK Nexus",
  description:
    "AK Nexus helps organizations accelerate AI adoption, digital transformation, PMO excellence, and technology modernization through enterprise consulting services. Strategy First. AI Second. Business Outcomes Always.",
};

export default function ConsultingPage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Discovery />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
