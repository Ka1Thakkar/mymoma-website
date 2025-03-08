"use client";
import { motion } from "framer-motion";
import ourVision from "../assets/1.png";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div
      className={
        poppins.className +
        " bg-bgwhite min-w-screen min-h-screen flex items-center justify-center gap-20 py-10 pt-28 md:py-20"
      }
    >
      <div className="flex flex-col-reverse lg:flex-row gap-2 md:gap-10 lg:gap-10 xl:gap-20 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="md:w-fit w-screen flex items-center lg:w-4/12 justify-center md:px-5 md:pt-0 pt-10 rounded-bl-[127px] "
        >
          <Image
            src={ourVision}
            alt="image"
            className="md:rounded-bl-[127px] object-fill"
          />
        </motion.div>
        <div className="w-10/12 lg:w-5/12 px-5">
          <div className="flex flex-col relative gap-10">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center md:items-start"
            >
              <p className="lg:text-[29px] text-[25px]">Empowering</p>
              <h1 className="lg:text-[47px] text-[40px] pb-2 font-semibold text-center lg:text-left">
                Your Entrepreneurial Journey
              </h1>
              <div className="h-[3px] w-[300px] bg-bgpurple"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              {/* <div className='absolute h-[130%] w-[90vw] lg:w-[50vw] left-[-10vw] lg:left-[-10vw] flex rounded-lg opacity-0 lg:opacity-100'>
                                <div className='w-[10px] bg-bgpurple rounded-tl-lg rounded-bl-lg'></div>
                                <div className='w-full bg-bgpurple/30 rounded-tr-lg rounded-br-lg'></div>
                            </div> */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
                className="w-full"
              >
                <p className="lg:text-[18px] text-[15px] lg:text-left">
                  At MyMoMa, we are committed to supporting women and LGBTQIA+
                  entrepreneurs by providing valuable resources to help you
                  thrive in your business endeavors. Explore our curated
                  materials designed to empower and guide you on your path to
                  success.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
