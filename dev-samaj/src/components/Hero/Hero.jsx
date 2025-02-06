/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import NumberCounter from "../NumberCounter/NumberCounter";

const Hero = ({ heroData }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[650px] relative bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-lg">
      {/* Brand Info */}
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
        <div className="space-y-6 text-center md:text-left">
          {/* <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-gradient bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            {heroData.title}
          </h2> */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-extrabold leading-tight text-gradient bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text"
          >
            {heroData.title}
          </motion.p>
          <p className="text-lg md:text-xl text-gray-500 font-light italic leading-relaxed">
            Established in 1966, an English medium school in Nehru Nagar, Delhi, stands at Ring Road, Nehru Nagar, Delhi - 110065, nurturing young minds with excellence.
          </p>
          <p className="text-lg md:text-xl text-gray-500 font-light italic leading-relaxed">
            The name "Dev Samaj" also honors a legacy of social reform, founded in Lahore in 1887 by Pandit Shiv Narayan Agnihotri.
          </p>
          {/* Button Section */}
          {heroData.isButtonsNeed && (
            <div className="flex gap-8 justify-center md:justify-start mt-8 items-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all">
                Learn More
              </button>
              <button className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-all">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center shadow-md">
                  <FaPlay className="text-blue-600" />
                </span>
                See, Who We Are?
              </button>
            </div>
          )}
          {heroData.isNumberCountNeed && <NumberCounter />}
        </div>
      </motion.div>
      {/* Hero Image */}
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
          alt="Hero Section"
          className="w-[350px] md:w-[550px] xl:w-[700px] rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
