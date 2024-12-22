// import React from "react";
// import { GrYoga } from "react-icons/gr";
// import { FaDumbbell } from "react-icons/fa6";
// import { GiGymBag } from "react-icons/gi";
// import { motion } from "framer-motion";
// import { SlideLeft } from "../../utility/animation";
import Principle from '../../assets/Principal.png';
import { HiAcademicCap } from "react-icons/hi2";
import Teacher from '../../assets/teachers/teacher7.jpg';
import { TbWriting } from "react-icons/tb";
import { GrGrow } from "react-icons/gr";
import { PiShootingStarFill } from "react-icons/pi";

// const WhyChooseData = [
//   {
//     id: 1,
//     title: "Academic Reputation",
//     desc: "We have strong tract record in acadmics, with qualified teachers, effective teching methods.",
//     icon: <GrYoga />,
//     bgColor: "#0063ff",
//     delay: 0.3,
//     bgImage:
//       "https://miro.medium.com/v2/da:true/resize:fit:1200/0*K6EVvh6kdk0nv19F",
//   },
//   {
//     id: 2,
//     title: "Facilities and Resources",
//     desc: "We have well maintained facilities and resources for students to learn and grow.",
//     link: "/",
//     icon: <FaDumbbell />,
//     bgColor: "#73bc00",
//     delay: 0.6,
//     bgImage:
//       "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1641983023/isnnice/ozwrngsjq2au62eyvjwd/isn-science-equipment.jpg",
//   },
//   {
//     id: 3,
//     title: "Values and Culture",
//     desc: "We have strong values and culture that helps students to grow and learn.",
//     link: "/",
//     icon: <GiGymBag />,
//     bgColor: "#fa6400",
//     delay: 0.9,
//     bgImage: "https://devsamajschools.com/images/1.jpg",
//   },
//   {
//     id: 4,
//     title: "Location and Accessibility",
//     desc: "We are located in the heart of the city, with easy accessibility for students.",
//     link: "/",
//     icon: <GiGymBag />,
//     bgColor: "#fe6baa",
//     delay: 0.9,
//     bgImage:
//       "https://content.jdmagicbox.com/v2/comp/delhi/t6/011pxx11.xx11.111019232646.s6t6/catalogue/dr-radhakrishnan-international-school-defence-colony-delhi-cbse-schools-nmsktze8rr-250.jpg",
//   },
// ];
const WhyChooseUs = () => {
  return (
    <div>

      {/* Why Choose Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        <div className="col-span-1 lg:col-span-4 bg-secondary ">
          <div className="flex flex-col lg:flex-row mx-auto my-0 w-full lg:w-[70%]">
           {/* Image Section */}
           <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img src={Principle} alt="Principle" className="h-full object-cover" />
           </div>
           {/* Text Section */}
           <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center text-white px-20 py-10">
             <h2 className="text-4xl lg:text-6xl font-semibold">Words of Our Visionary </h2>
             <p className="font-light text-lg">We live in a time where our educational system desperately needs to put more stress on inculcating universal values, such as empathy, service-mindedness, true love and compassion in our youngsters. We need educational institutions which actively spread these universal, spiritual values.</p>
             <p> - Principal</p>
           </div>
          </div>
        </div>
        <div className=" bg-sky-800 ">
          <div className="h-[300px] flex flex-col justify-center items-center gap-2 p-5">
            <HiAcademicCap className="text-6xl text-white" />
            <p className="text-white text-lg font-extralight">Implement educational practices that foster integrity, empathy, and responsibility in students.</p>
          </div>
        </div>
        <div className="row-span-1 lg:row-span-2">
          <img src={Teacher} alt="Teacher" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 lg:col-span-2 bg-white">
          <div className="h-[300px] flex flex-col justify-center items-center lg:items-end p-5  gap-2">
            <h2 className="text-4xl lg:text-6xl font-bold text-secondary">Why Choose Us</h2>
            <p className="text-black text-lg font-extralight w-full md:w-[70%] lg:text-right">Our mission is to provide a safe, nurturing environment where children can learn and grow through a variety of experiences.</p>
          </div>
        </div>
        <div className=" bg-secondary ">
          <div className="h-[300px] flex flex-col justify-center items-center gap-2 p-5">
            <TbWriting className="text-6xl text-white" />
            <p className="text-white text-lg font-extralight px-10">A curriculum promoting academic excellence and community service</p>
          </div>
        </div>
        <div className=" bg-sky-800 ">
          <div className="h-[300px] flex flex-col justify-center items-center gap-2 p-5">
            <GrGrow className="text-6xl text-white" />
            <p className="text-white text-lg font-extralight px-10">Implement educational practices that foster integrity, empathy, and responsibility in students.</p>
          </div>
        </div>
        <div className=" bg-secondary ">
          <div className="h-[300px] flex flex-col justify-center items-center gap-2 p-5">
            <PiShootingStarFill className="text-6xl text-white" />
            <p className="text-white text-lg font-extralight px-10">A curriculum promoting academic excellence and community service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

{/* <div className="container py-24">

<div className="space-y-4 p-6 text-center max-w-[700px] mx-auto mb-5">
  <h1 className="font-semibold text-secondary text-4xl lg:text-6xl">
    Benefits of Choosing
    <span className="text-primary"> Dev Samaj School </span>
  </h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {WhyChooseData.map((item, index) => {
    return (
      <motion.div
        key={index}
        variants={SlideLeft(item.delay)}
        initial="hidden"
        whileInView={"visible"}
        style={{
          backgroundImage: `url(${item.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] h-[350px]"
      >
      
        <div className="absolute cursor-pointer flex flex-col justify-center items-center p-10 bg-secondary opacity-95 left-0 bottom-0 rounded-b-xl w-full hover:h-full hover:rounded-t-lg transition-all duration-1000">
          <p className="font-semibold text-primary">{item.title}</p>
          <p className="text-sm text-white">{item.desc}</p>
        </div>
      </motion.div>
    );
  })}
</div>
</div> */}