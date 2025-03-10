"use client";
import { motion } from "framer-motion";

import ourVision from "@/Assets/Images/OurVision.png";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const OurVision = () => {
  return (
    <div
      className={
        poppins.className +
        " bg-bgwhite min-w-screen min-h-screen flex items-center justify-center gap-20 py-10 md:py-20"
      }
    >
      <div className="flex flex-col-reverse md:flex-row gap-2 lg:gap-10 xl:gap-20 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="md:w-fit w-screen flex items-center justify-center md:px-5 md:pt-0 pt-10 rounded-bl-[127px] "
        >
          <Image
            src={ourVision}
            alt="image"
            className="md:rounded-bl-[127px] object-fill"
          />
        </motion.div>
        <div className="md:w-5/12 px-5">
          <div className="flex flex-col relative gap-10 pt-20 md:pt-40">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center md:items-start"
            >
              <h1 className="lg:text-[47px] text-[40px] font-semibold text-center lg:text-left">
                Our Vision
              </h1>
              <div className="h-[3px] w-[300px] bg-bgpurple"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="relative flex"
            >
              {/* <div className='absolute h-[130%] w-[90vw] lg:w-[50vw] left-[-10vw] lg:left-[-10vw] flex rounded-lg opacity-0 lg:opacity-100'>
                                <div className='w-[10px] bg-bgpurple rounded-tl-lg rounded-bl-lg'></div>
                                <div className='w-full bg-bgpurple/30 rounded-tr-lg rounded-br-lg'></div>
                            </div> */}
              <motion.div className="w-[10px] bg-bgpurple rounded-tl-lg rounded-bl-lg"></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
                className="bg-bgpurple/30 px-5 w-full rounded-tr-lg rounded-br-lg"
              >
                <p className="lg:text-[18px] text-[15px] py-5 lg:py-10 lg:text-left lg:pr-10">
                  <span className="font-bold italic">
                    Our vision is a world where every woman and member of the
                    LGBTQIA+ community stands as a fearless entrepreneur.
                  </span>{" "}
                  By helping them build and expand their businesses, overcoming
                  the challenges of limited resources, we aspire to dismantle
                  all barriers to success, cultivating a global network of
                  empowered individuals.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;

