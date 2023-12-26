import styles from './styles.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from './anim';
import { useEffect } from 'react';

export default function index({data, isActive, setSelectedIndicator, isHamActive, setIsHamActive}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}}
        onClick={()=>{setTimeout(()=>{setIsHamActive(!isHamActive)},750)}}
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
}