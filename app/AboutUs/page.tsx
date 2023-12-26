'use client'
import Footer from "@/components/Footer/Footer";
import MeetOurTeam from "./components/MeetOurTeam";
import OurMission from "./components/OurMission";
import OurVision from "./components/OurVision";
import OurMentors from './components/OurMentor';
import { useEffect } from "react";

const About = () => {
    return (
        <section className="bg-bgwhite">
            <OurVision />
            <OurMission />
            <MeetOurTeam />
            <OurMentors />
            <Footer />
        </section>
    );
}
 
export default About;