'use client'
import Footer from "@/components/Footer/Footer";
import MeetOurTeam from "./components/MeetOurTeam";
import OurMission from "./components/OurMission";
import OurVision from "./components/OurVision";
import OurMentors from './components/OurMentor';
import { useEffect } from "react";

const About = () => {
    const pathname = location.pathname
    useEffect(() => {
        if(location.pathname !== pathname && window.innerWidth < 750) {
            location.reload()
        }
    })
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