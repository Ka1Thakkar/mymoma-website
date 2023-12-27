'use client'
import Link from "next/link";
import {motion} from 'framer-motion'


const Text = (buttonTextColor = "") => {
    return (
        <div className="absolute z-10">
            <motion.h1
            initial={{opacity:0, y: -20}}
            animate={{opacity:1, y:0}}
            transition={{ease:'easeInOut', duration:0.3, delay:0.2}}
            className="2xl:text-[65px] xl:text-[60px] lg:text-[50px] md:text-[47px] text-[40px] text-bgwhite font-semibold">Have a Business Dilemma?</motion.h1>
            <motion.h1
            initial={{opacity:0, y: -20}}
            animate={{opacity:1, y:0}}
            transition={{ease:'easeInOut', duration:0.3,delay:0.4}}
            className="2xl:text-[40px] xl:text-[37px] lg:text-[31px] md:text-[29px] font-medium text-[25px] text-bgwhite pb-5 lg:pb-10">Reach Out to MyMoMa</motion.h1>
            <motion.p
            initial={{opacity:0, y: -20}}
            animate={{opacity:1, y:0}}
            transition={{ease:'easeInOut', duration:0.3, delay:0.6}}
            className="2xl:text-[25px] xl:text-[23px] lg:text-[19px] md:text-[18px] text-[15px] text-bgwhite pb-5 lg:pb-10">Get Ready to have YOUR Moment of Makeover!</motion.p>
            <Link href={"/ContactUs"}>
                <motion.button
                initial={{opacity:0, y: -20}}
                animate={{opacity:1, y:0}}
                transition={{ease:'easeInOut', duration:0.3, delay:0.8}}
                className="relative group w-[177px] h-[44px]">
                    <div className="absolute h-full w-full top-0 right-0 rounded-[10px] bg-bgwhite font-bold text-[15px] lg:px-5 px-3 py-2 z-10 flex items-center justify-center">Get Started!</div>
                    <div className="absolute h-full w-full top-0 right-0 group-hover:mr-2 group-hover:mt-2 bg-mentorpink rounded-[10px] ease-in-out transition-all"></div>
                </motion.button>
            </Link>
        </div>
    );
}
 
export default Text;