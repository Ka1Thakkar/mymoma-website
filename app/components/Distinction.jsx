'use client'
import {motion} from'framer-motion'

const distinctions = [
    {
        distinct : "Our Diverse Team",
        description : "Diverse team of passionate student consultants from Harvard, UCLA, IITs, SRCC, SSCBS, BITS Pilani, Ashoka, LSR, St. Stephens and many more"
    },
    {
        distinct : "Industry Expert Advisors",
        description : "Industry expert advisors from Boston Consulting Group, Bain and Company, McKinsey & Company, Dalberg, Accenture, and D. E. Shaw"
    },
    {
        distinct : "Holistic Problem-Solving",
        description : "Holistic problem solving by focusing on business acumen, creativity, technical feasibility, and scientific theories"
    },
]

const Distinction = () => {
    return (
        <div className=" h-fit bg-gradient-to-b from-bgpurple to-bgwhite relative mt-[-1px]">
            <div className="h-full w-full py-10 lg:py-40 2xl:px-40 lg:px-20 px-5 z-10 bg-transparent">
                <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once: true}}
                transition={{duration:0.5, delay:0.5, ease:'easeInOut'}}
                className=" bg-gradient-to-t from-[#653A8D] to-[#EDB4FE] p-2 rounded-[25px]">
                    <div className="bg-bglightpurple py-10 lg:py-20 lg:px-20 px-5 2xl:px-40 rounded-[25px] flex flex-col items-center">
                        <motion.div 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        viewport={{once: true}}
                        transition={{duration:0.5, delay:0.6, ease:'easeInOut'}}
                        className="lg:pb-20 pb-10 flex flex-col items-center">
                            <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5 text-center">
                                What sets Us Apart?
                            </h1>
                            <div className="w-[40%] h-[3px] bg-[#653A8D]"></div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        viewport={{once: true}}
                        transition={{duration:0.5, delay:0.7, ease:'easeInOut'}}
                        className="flex flex-col gap-10 text-center lg:text-left">
                            {distinctions.map((data,i) => {
                                const delay = (i*0.1 + 0.7)
                                return (
                                    <motion.div 
                                    initial={{opacity:0, y:-10}}
                                    whileInView={{opacity:1, y:0}}
                                    viewport={{once: true}}
                                    transition={{duration:0.5, delay:delay, ease:'easeInOut'}}
                                    key={i} className="flex flex-col lg:flex-row justify-between gap-5">
                                        <h1 className="font-semibold text-[25px] lg:text-[29px] lg:w-4/12">
                                            {data.distinct}
                                        </h1>
                                        <p className="lg:text-[18px] text-[15px] lg:w-7/12">
                                            {data.description}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            {/* <div className="bg-bgpurple h-[30vh] w-full absolute top-0"></div> */}
        </div>
    );
}
 
export default Distinction;