'use client'

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.scss"
import { AnimatePresence } from "framer-motion";
import Menu from "./Hambruger";
import { Holtwood_One_SC } from "next/font/google";
import logo from '@/Assets/Images/White 1.png'
import Link from "next/link";
import {motion} from 'framer-motion'

const holt = Holtwood_One_SC({weight:["400"], subsets:["latin"]})

const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About US",
      href: "/AboutUs",
    },
    {
      title: "Our Projects",
      href: "/OurProjects",
    },
    {
      title: "Join Us",
      href: "/JoinUs",
    },
    {
      title: "Contact Us",
      href: "/ContactUs",
    },
  ]

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const logoRef = useRef(null)
    const menuRef = useRef(null)
    const [isHam, setIsHam] = useState(false)
    

    useEffect(()=>{
        (function () {
            var width = window.innerWidth;
            const pathname = window.location.pathname
            

            if (window.innerWidth <= 750) {
                setIsHam(false)
            } else {
                setIsHam(true)
            }

            if (window.location.pathname !== pathname){
                window.location.reload()
            }
        
            window.addEventListener('resize', function () {
                window.location.reload()
                if (window.innerWidth <= 750) {
                    setIsHam(false)
                }else {
                    setIsHam(true)
                }
            });
        })();
        // const windowWidth = window.innerWidth
        // if(windowWidth <= 750) {
        //     setIsHam(false)
        // } else {
        //     setIsHam(true)
        // }
    })

    return (
        <nav className=" flex justify-between items-center pr-5 lg:px-10 fixed top-0 py-3 md:py-2 z-5 bg-[#7556FB] w-screen overflow-x-hidden z-50" ref={menuRef}>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.3,ease:'easeInOut'}}
            className={holt.className} ref={logoRef}>
                <Image src={logo} alt="mymoma-logo" className="lg:h-[75px] h-[60px] object-contain"/>
            </motion.div>
            {!isHam && 
                <div id="hamburger" onClick={() => setIsActive(!isActive)} className={styles.button} ref={logoRef}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </div>
            }
            {/* <AnimatePresence mode="wait">
                {isActive && <Menu />}
            </AnimatePresence> */}

            {isHam ?
                (<div className="flex gap-5 lg:gap-10 text-base lg:text-xl font-semibold text-white">
                    {navItems.map((data,i) => {
                        const delay = (i*0.2 + 0.2)
                        return (
                            <motion.div
                            initial={{opacity:0, x:10}}
                            animate={{opacity:1, x:0}}
                            transition={{duration:0.3, delay: delay, ease:'easeInOut'}}
                            key={i}>
                                <Link href={data.href}>
                                    <h1>{data.title}</h1>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>) : (
                    <AnimatePresence mode="wait">
                        {isActive && <Menu isActive={isActive} setIsActive={setIsActive} />}
                    </AnimatePresence>
                )
            }
        </nav>
    );
}
 
export default Navbar;