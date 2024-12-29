import React from "react";
import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
import NumberCounter from "../NumberCounter/NumberCounter";

const Hero = () => {
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
            {/* <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 uppercase font-semibold"
            >
              Acquire Knowledge and Form Character
            </motion.p> */}
            <h1 className="text-4xl lg:text-6xl  font-bold !leading-tight text-secondary">
              {/* <span className="text-primary">Welome</span> */}
              <span>Welome To Dev Samaj School</span>
            </h1>
            <p className="font-light text-lg">
              An English medium school in Nehru Nagar, Delhi, that was
              established in 1966. The school's address is Ring Road, Nehru
              Nagar, Delhi - 110065. Dev Samaj may also refer to a religious and
              social reform society founded in Lahore in 1887 by Pandit Shiv
              Narayan Agnihotri. The society's goal is to serve humanity without
              regard to caste, creed, color, or country.
            </p>
            {/* button section */}
            <div className="flex gap-8 justify-center md:justify-start !mt-8 items-center">
              <button className="primary-btn">Learn More</button>
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See, Who We Are ?
              </button>
            </div>
            <NumberCounter />
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
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
