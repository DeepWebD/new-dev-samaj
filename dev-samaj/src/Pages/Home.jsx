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
  title: "Welome to Dev Samaj School",
  description: `Established in 1966, an English medium school in Nehru Nagar, Delhi, stands at Ring Road, Nehru Nagar, Delhi - 110065, nurturing young minds with excellence. The name "Dev Samaj" also honors a legacy of social reform, founded in Lahore in 1887 by Pandit Shiv Narayan Agnihotri. Dedicated to serving humanity, it transcends caste, creed, color, and country, embodying universal compassion and progress.`,
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
