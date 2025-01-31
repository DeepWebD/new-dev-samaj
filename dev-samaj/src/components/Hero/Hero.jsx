/* eslint-disable react/prop-types */

import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import NumberCounter from "../NumberCounter/NumberCounter";

const Hero = ({ heroData }) => {
  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[650px] relative">
        {/* brand info */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0"
        >
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl  font-bold !leading-tight text-secondary">
              <span>{heroData.title}</span>
            </h1>
            <p className="font-light text-lg">{heroData.description}</p>
            {/* button section */}
            {heroData.isButtonsNeed && (
              <div className="flex gap-8 justify-center md:justify-start !mt-8 items-center">
                <button className="primary-btn">Learn More</button>
                <button className="flex justify-end items-center gap-2 font-semibold">
                  <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                    <FaPlay className="text-secondary" />
                  </span>
                  See, Who We Are ?
                </button>
              </div>
            )}
            {heroData.isNumberCountNeed && <NumberCounter />}
          </div>
        </motion.div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            src={heroData.heroImage}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
