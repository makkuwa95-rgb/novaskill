import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}