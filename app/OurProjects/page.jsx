"use client";
import Footer from "@/components/Footer/Footer";
import ImpactModel from "./components/ImpactModel";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { useEffect } from "react";

const OurProjects = () => {
  return (
    <section className="bg-bgwhite">
      <ImpactModel />
      <Projects />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default OurProjects;

