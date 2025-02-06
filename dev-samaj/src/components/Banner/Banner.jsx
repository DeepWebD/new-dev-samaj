/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
import ImageSlider from "../common/ImageSlider";
import VideoPlayer from "../common/VideoPlayer";

const Banner = ({ subtitle, tag, reverse }) => {
  return (
    // <div>Banner</div>
    <div className="bg-sky-100 p-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* banner Image section */}
          <div
            className={`flex justify-start items-center  ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            {reverse ? <VideoPlayer /> : <ImageSlider />}
          </div>
          {/* Banner text section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] p-2">
            <motion.h2
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className=" text-secondary font-semibold capitalize"
            >
              {tag}
            </motion.h2>

            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              className="text-lg font-extralight text-slate-500"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn !mt-5">See More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
