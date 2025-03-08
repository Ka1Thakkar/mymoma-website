"use client";
import Footer from "@/components/Footer/Footer";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import dynamic from "next/dynamic";
import Link from "next/link";
// import MeetOurTeam from "./components/MeetOurTeam";
// import OurMission from "./components/OurMission";
// import OurVision from "./components/OurVision";
// import OurMentors from './components/OurMentor';
import { useEffect } from "react";

const About = () => {
  const handleDownload = () => {
    const pdfUrl = "/From_StartUp_to_ScaleUp.pdf"; // Ensure the file is in the 'public' folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "From_StartUp_to_ScaleUp.pdf"; // Change file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="bg-bgwhite">
      <div className="min-h-screen flex flex-col items-center justify-center py-28 lg:py-40">
        <div className="flex flex-col max-w-fit items-center px-5">
          <h1 className="lg:text-[47px] text-[32px] font-semibold text-center">
            From StartUp to ScaleUp
          </h1>
          <p className="pb-5 text-center text-sm lg:text-base">
            A Practical Roadmap for SMEs to Grow
          </p>
          <div className="h-[3px] w-[50%] bg-bgpurple"></div>
        </div>
        <div className="lg:w-7/12 w-10/12 pt-16 pb-16">
          <p className="text-base lg:text-lg text-justify">
            Navigating the journey from a budding startup to a thriving
            enterprise requires the right strategies, insights, and resources.
            From StartUp to ScaleUp is a comprehensive handbook designed to
            equip SME founders with actionable steps to drive sustainable
            growth. Covering key aspects such as financial incentives, digital
            marketing, e-commerce strategies, and essential business tools, this
            resource serves as a strategic guide to overcoming challenges and
            scaling successfully.
            <br />
            <br />
            Download now and take your business to the next level!
          </p>
        </div>
        {/* <a href="./assets/handbook.pdf"> */}
        <button
          onClick={handleDownload}
          className="bg-bgpurple px-5 py-2 text-white font-semibold rounded-full"
        >
          Download now
        </button>
        {/* </a> */}
      </div>
      <Footer />
    </section>
  );
};

export default About;
