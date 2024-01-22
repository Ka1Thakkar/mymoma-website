'use client'
import {motion} from 'framer-motion'

const WhoWe = () => {
    return (
        <div className="h-fit bg-bgwhite px-5 lg:px-20 xl:px-40 py-20 mt-[-1px]">
            <motion.div className="pb-20">
                <motion.h1
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                transition={{ease:'easeInOut', duration:0.5, delay:0.5}}
                className="text-[47px] font-semibold pb-5">Who Are We?</motion.h1>
                <motion.div
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                transition={{ease:'easeInOut', duration:0.5, delay:0.6}}
                className="w-[30vw] h-[3px] bg-bgpurple"></motion.div>
            </motion.div>
            <div className="flex justify-end">
                <div className="lg:w-7/12">
                    <motion.p
                    initial={{opacity:0, x:30}}
                    whileInView={{opacity:1, x:0}}
                    transition={{ease:'easeInOut', duration:0.5, delay:0.7}}
                    className="lg:text-[29px] text-[18px]">
                    We are a team of highly passionate and goal- driven students from across India dedicated to the <span className=" font-semibold">upliftment and empowerment of women and LGBTQIA+ entrepreneurs</span> who often stand at the crossroads of a system riddled with structural and operational barriers.
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
 
export default WhoWe;