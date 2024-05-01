'use client'
import {delay, motion} from 'framer-motion'

import Yogam from '../assets/Clients/Yogam Pottery.png'
import UnMa from '../assets/Clients/UnMa.png'
import Divya from '../assets/Clients/Divya.png'
import Fermi from '../assets/Clients/Fermi.png'
import Handy from '../assets/Clients/Handy.png'
import Shakti from '../assets/Clients/Shakti.png'
import Plantitude from '../assets/Clients/Plantitude.png'
import Argha from '../assets/Clients/Argham.png'
import Maakrit from '../assets/Clients/Maarkit.png'
import Carer from '@/app/assets/Clients/Carer.jpeg'
import Krifin from '@/app/assets/Clients/Krifin.jpeg'

import Image from 'next/image'

const clients = [
    {
        logo : Yogam,
    },
    {
        logo : UnMa,
    },
    {
        logo : Divya,
    },
    {
        logo : Handy,
    },
    {
        logo : Argha,
    },
    {
        logo : Shakti,
    },
    {
        logo : Plantitude,
    },
    {
        logo : Maakrit,
    },
    {
        logo : Carer,
    },
    {
        logo : Krifin,
    },
]

const OurClients = () => {
    return (
        <div className="h-fit bg-gradient-to-b from-bgwhite to-bgpurple 2xl:px-40 lg:px-20 px-5 py-20 mt-[-1px]">
            <div className="bg-gradient-to-b from-[#653A8D] to-[#ECB4FE] p-1 rounded-[25px]">
                <div className="bg-bglightpurple py-10 lg:py-20 2xl:px-40 lg:px-20 px-5 rounded-[25px]">
                    <motion.div 
                    initial={{opacity:0, y:25}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once: true}}
                    transition={{duration:0.5, delay:0.6, ease:'easeInOut'}}
                    className=" flex flex-col items-center justify-center pb-10 lg:pb-20">
                        <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5">Our Clients</h1>
                        <div className="w-[50%] h-[3px] bg-[#653A8D]"></div>
                    </motion.div>
                    <div className='grid grid-cols-3 lg:grid-cols-4 items-center justify-center lg:gap-x-5 lg:gap-y-10 gap-x-2 gap-y-5'>
                        {clients.map((data , i) => {
                            const delay = (i*0.1 + 0.6)
                            return (
                                <motion.div 
                                initial={{opacity:0, y:25}}
                                whileInView={{opacity:1, y:0}}
                                viewport={{once: true}}
                                transition={{duration:0.5, delay:delay, ease:'easeInOut'}}
                                key={i} className='flex items-center w-full justify-center'>
                                    <Image src={data.logo} alt='company logo' className='rounded-lg' />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OurClients;