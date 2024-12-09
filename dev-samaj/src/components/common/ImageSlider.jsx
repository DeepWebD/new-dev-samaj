import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpg";

const images = [image1, image2, image3, image4];
export default function ImageSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className={` w-full h-full lg:h-[400px] lg:w-[350px]`}>
      <Slider {...settings}>
        <div>
          <img
            className={` w-full h-[350px] lg:h-[400px] lg:w-[350px] flex justify-center items-center border rounded-lg object-cover`}
            src={image1}
            alt=""
          />
        </div>
        <div>
          <img
            className={` w-full h-[350px] lg:h-[400px] lg:w-[350px]  flex justify-center items-center border rounded-lg object-cover`}
            src={image2}
            alt=""
          />

        </div>
        <div>
          <img
            className={` w-full h-[350px] lg:h-[400px] lg:w-[350px]  flex justify-center items-center border rounded-lg object-cover`}
            src={image3}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
