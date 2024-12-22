import React from 'react'
import Navbar from './components/Navbar/Navbar';
import NavbarBanner from './components/Navbar/NavbarBanner'
import Hero from './components/Hero/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'; // Import the NumberCounter component
import WhyChooseUs from  './components/WhyChooseUs/ WhyChooseUs '
import Banner from './components/Banner/Banner'
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import SubjectCard from './components/SubjectCard/SubjectCard';
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import VideoBg from './components/VideoBg/VideoBg'
import Teachers from './components/Teachers/Teachers';
import ContactUs from './components/ContactUs/ContactUs';
import ImageSlider from './components/common/ImageSlider';
import VideoPlayer from './components/common/VideoPlayer';
import Carousel from './components/Header/Carousel/Carousel'
import Prayer from './components/Prayer/Prayer'

const BannerData = {
  image: Img1,
  tag: "Moments to Cherish",
  title: "Life at Dev Samaj School: A Climps into Our Journey",
  subtitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "Stories in Motion",
  title: "Life at Dev Samaj School: Inspiring Moments in Motion",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Carousel />
      {/* <Navbar />
      <NavbarBanner />
      <VideoBg /> */}
      {/* <NumberCounter /> */}
      <Hero />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <Prayer />
      {/* <SubjectCard /> */}
      <Teachers />
      <section id='contact'>
      <ContactUs />
      </section>
     
       {/* <VideoPlayer /> */}
      <Testimonial />
      <Footer />
    </main>
  )
}



export default App