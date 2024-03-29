'use client'
import {motion} from 'framer-motion'

import Image from 'next/image'

import minds from '../Assets/Mindsets.png'
import change from '../Assets/Change.png'
import ideas from '../Assets/Ideas.png'
import unlock from '../Assets/Unlock.png'

const opportunities = [
    {
        image : minds,
        text : "Contribute to projects that transform industries and mindsets"
    },
    {
        image : change,
        text : "Drive change that empowers women and LGBTQIA+ entrepreneurs"
    },
    {
        image : ideas,
        text : "Collaborate with brilliant minds and mentors from diverse backgrounds"
    },
    {
        image : unlock,
        text : "Unlock your potential through continuous learning and skill development"
    },
]

const Embrace = () => {
    return (
        <div className="min-h-[80vh] bg-bgwhite py-20 flex flex-col justify-center items-center px-5">
            <motion.div 
            initial={{opacity:0, y:25}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration:0.5, ease:'easeInOut'}}
            className="flex flex-col items-center">
                <h1 className="lg:text-[47px] text-[40px] font-semibold text-center">Embrace Opportunities</h1>
                <p className="lg:text-[29px] text-[25px] text-center pb-5">
                    with MyMoMa
                </p>
                <div className='h-[3px] w-[50%] bg-bgpurple'></div>
            </motion.div>
            <motion.div 
            initial={{opacity:0, y:25}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration:0.5, delay:0.2, ease:'easeInOut'}}
            className='grid grid-cols-1 md:grid-cols-2 lg:px-20 2xl:px-80 gap-x-10 gap-y-10 pt-10'>
                {opportunities.map((opportunity, i)=>{
                    return (
                        <div key={i} className='flex items-center justify-center gap-5 lg:gap-10'>
                            <Image src={opportunity.image} alt='image' />
                            <p className='lg:text-[18px] text-[15px]'>{opportunity.text}</p>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    );
}
 
export default Embrace;