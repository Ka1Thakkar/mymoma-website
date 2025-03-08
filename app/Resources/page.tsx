"use client";
import Footer from "@/components/Footer/Footer";
// import MeetOurTeam from "./components/MeetOurTeam";
// import OurMission from "./components/OurMission";
// import OurVision from "./components/OurVision";
// import OurMentors from './components/OurMentor';
import { useEffect } from "react";
import Header from "./components/header";
import OurResources from "./components/OurResources";

const About = () => {
  return (
    <section className="bg-bgwhite">
      {/* <Header /> */}
      <OurResources />
      <Footer />
    </section>
  );
};

export default About;
