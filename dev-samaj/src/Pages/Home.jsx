import React from "react";
import Carousel from "../components/Header/Carousel/Carousel";
import Hero from "../components/Hero/Hero";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs ";
import Banner from "../components/Banner/Banner";
import Prayer from "../components/Prayer/Prayer";
import Leaders from "../components/Leaders/Leaders";
import ContactUs from "../components/ContactUs/ContactUs";
import Testimonial from "../components/Testimonial/Testimonial";
import { BannerData, BannerData2 } from "../mockdata/data";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  console.log(currentUrl);
  return (
    <>
      <Carousel />
      <Hero />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <Prayer />
      <Leaders />
      <section id="contact">
        <ContactUs />
      </section>
      <Testimonial />
    </>
  );
};

export default Home;
