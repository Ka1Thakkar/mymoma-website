'use client'
import {motion} from 'framer-motion'

import { Poppins } from "next/font/google";

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const OurMission = () => {
    return (
        <div className={poppins.className + " bg-bgwhite min-h-[65vh] flex flex-col justify-center items-center gap-20 py-20 lg:py-40"}>
            <motion.div 
            initial={{opacity:0, y:-25}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.5, delay:0.5, ease:'easeInOut'}}
            className="flex flex-col items-center">
                <h1 className="lg:text-[47px] text-[40px] font-semibold">Our Mission</h1>
                <div className='h-[3px] w-[50%] bg-bgpurple'></div>
            </motion.div>
            <motion.p 
            initial={{opacity:0, y:-25}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration:0.5, delay:0.6, ease:'easeInOut'}}
            className=" lg:w-5/12 w-10/12 lg:text-[18px] text-15px text-justify">
            Our mission is to provide unwavering support, education, and resources to women and the LGBTQIA+ community on their journey to entrepreneurial greatness.
            <br />
            <br />
            We commit to offering top-notch business consultancy services for free, fueling their growth, fostering inclusivity, and enabling them to create lasting impacts in their industries.
            <br />
            <br />
            Our team comprises diverse consultants from India's premier institutions from various fields such as engineering, marketing, finance, design, uniting to provide comprehensive and holistic solutions for every business challenge. Through mentorship, tailored guidance, and a safe space for exploration, we strive to make every dream attainable, every vision a reality.

            </motion.p>
        </div>
    );
}
 
export default OurMission;