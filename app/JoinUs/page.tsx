'use client'
import Footer from "@/components/Footer/Footer";
import Hero from './components/Hero'
import Embrace from './components/Embrace'
import Openings from './components/Openings'
import { useEffect } from "react";

const JoinUs = () => {
    return (
        <section className="bg-bgwhite">
            <Hero />
            <Embrace />
            <Openings />
            <Footer />
        </section>
    );
}
 
export default JoinUs;