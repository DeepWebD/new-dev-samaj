import React from "react";
import Slider from "react-slick";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import Navigation from "../Navigation/Navigation";

const caraousel = [banner1, banner2, banner3];

function Carousel() {
  // eslint-disable-next-line no-undef

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={caraousel[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
    
  };
  return (
    <div className="carouselHeading">
      
      <Navigation />
      <div className="absolute z-10 w-[100vw] h-[100vh] bg-secondary opacity-70"></div>
      <div className="absolute flex flex-col justify-center items-center text-4xl gap-0 lg:text-[100px] lg:gap-14 font-extrabold z-10 w-[100vw]  top-1/2 text-white ">
        <div>Empowering Future</div>
        <div> Leaders with Values</div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={caraousel[0]} />
          </div>
          <div>
            <img src={caraousel[1]} />
          </div>
          <div>
            <img src={caraousel[2]} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
