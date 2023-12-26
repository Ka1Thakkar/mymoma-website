'use client'
import Form from './components/Form'
import Connect from './components/Connect'

import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import { useEffect } from 'react';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const ContactUs = () => {
    const pathname = location.pathname
    useEffect(() => {
        if(location.pathname !== pathname && window.innerWidth < 750) {
            location.reload()
        }
    })
    return (
        <section className={poppins.className + " min-h-screen bg-bgwhite"}>
            <Form />
            <Connect />
            <Footer />
        </section>
    );
}
 
export default ContactUs;