'use client'
import Footer from '@/components/Footer/Footer';
import ImpactModel from './components/ImpactModel'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import { useEffect } from 'react';

const OurProjects = () => {
    const pathname = location.pathname
    useEffect(() => {
        if(location.pathname !== pathname && window.innerWidth < 750) {
            location.reload()
        }
    })
    return (
        <section>
            <ImpactModel />
            <Projects />
            <Testimonials />
            <Footer />
        </section>
    );
}
 
export default OurProjects;