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
import HeroImg from "../assets/hero.png";

const heroData = {
  title: "Welome To Dev Samaj School",
  description: `   An English medium school in Nehru Nagar, Delhi, that was
  established in 1966. The school's address is Ring Road, Nehru
  Nagar, Delhi - 110065. Dev Samaj may also refer to a religious and
  social reform society founded in Lahore in 1887 by Pandit Shiv
  Narayan Agnihotri. The society's goal is to serve humanity without
  regard to caste, creed, color, or country.`,
  heroImage: HeroImg,
  isButtonsNeed: true,
  isNumberCountNeed: true,
};

const Home = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  console.log(currentUrl);
  return (
    <>
      <Carousel />
      <Hero heroData={heroData} />
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
