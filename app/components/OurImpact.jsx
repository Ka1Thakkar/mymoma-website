'use client'

import Image from "next/image";
import impact from '../assets/Impact.png'
import {motion} from 'framer-motion'

const impacts = [
    {
        quantity : "55+",
        description : "WLGBTQIA+ Led enterprises impacted"
    },
    {
        quantity : "700K+",
        description : "Revenue milestone achieved for clients"
    },
    {
        quantity : "10+",
        description : "Industries served, catering to multitude of sectors"
    },
]

const OurImpact = () => {
    return (
        <section className=" bg-bgwhite mt-[-5px] h-fit lg:px-20 2xl:px-40 w-full py-10 lg:py-40">
            <motion.div 
            initial={{opacity:0,x:25}}
            whileInView={{opacity:1,x:0}}
            viewport={{once: true}}
            transition={{duration:0.5, delay:0.5, ease:'easeInOut'}}
            className="px-5 pb-10">
                <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5">Our Impact</h1>
                <div className="w-[50%] h-[3px] bg-bgpurple"></div>
                <p className="lg:text-[29px] text-[25px] italic pt-10 pb-10">
                    Transforming ONE WLGBTQIA+ Led Business at a Time
                </p>
            </motion.div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20">
                <div className="lg:w-7/12 px-5">
                    {/* <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5">Our Impact</h1>
                    <div className="w-[50%] h-[3px] bg-bgpurple"></div>
                    <p className="lg:text-[29px] text-[25px] italic pt-10 pb-10">
                        Transforming ONE WLGBTQIA+ Led Business at a Time
                    </p> */}
                    <div className="flex flex-col gap-10 sm:grid sm:grid-cols-3 lg:flex lg:flex-col">
                        {impacts.map((data,i)=>{
                            const delay = (i*0.1 + 0.6)
                            return (
                                <motion.div 
                                initial={{opacity:0, x:-25}}
                                whileInView={{opacity:1, x:0}}
                                viewport={{once: true}}
                                transition={{duration:0.5, delay:delay, ease:'easeInOut'}}
                                key={i} className="flex flex-col lg:flex-row items-center gap-5 bg-bglightpurple rounded-tl-[35px] p-5 shadow-lg shadow-black/20">
                                    <h1 className="2xl:text-[65px] xl:text-[60px] lg:text-[50px] md:text-[47px] text-[40px] font-semibold text-bgpurple">{data.quantity}</h1>
                                    <p className="2xl:text-[25px] xl:text-[23px] lg:text-[19px] md:text-[18px] text-[15px] text-center lg:text-left">{data.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
                <motion.div 
                initial={{opacity:0, x:25}}
                whileInView={{opacity:1, x:0}}
                viewport={{once: true}}
                transition={{duration:0.5, delay:0.6, ease:'easeInOut'}}
                className="lg:w-4/12 md:h-[60vh] lg:h-[100%]lg:rounded-[0px] lg:rounded-br-[127px] object-cover w-[100vw]">
                    <Image src={impact} alt="impact" className="lg:rounded-[0px] lg:rounded-br-[127px] object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
 
export default OurImpact;