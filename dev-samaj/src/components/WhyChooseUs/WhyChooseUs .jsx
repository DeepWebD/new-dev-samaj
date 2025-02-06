import React from "react";
import { HiAcademicCap } from "react-icons/hi2";
import { TbWriting } from "react-icons/tb";
import { GrGrow } from "react-icons/gr";
import { PiShootingStarFill } from "react-icons/pi";
import Principal from "../../assets/Principal.png";
import Teacher from "../../assets/teachers/teacher7.jpg";

const WhyChooseUs = () => {
  return (
    <div>
      {/* Words of Our Visionary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={Principal}
            alt="Principal"
            className="h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center p-10 gap-6">
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            Words of Our Visionary
          </h2>
          <p className="text-lg font-light leading-relaxed">
            We live in a time where our educational system desperately needs to
            put more stress on inculcating universal values, such as empathy,
            service-mindedness, true love, and compassion in our youngsters. We
            need educational institutions that actively spread these universal,
            spiritual values.
          </p>
          <p className="italic text-yellow-300">- Principal</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
        <div className="bg-blue-800 text-white p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg">
          <HiAcademicCap className="text-5xl" />
          <p className="text-lg font-light text-center">
            Implement educational practices that foster integrity, empathy, and
            responsibility in students.
          </p>
        </div>
        <div className="row-span-1 lg:row-span-2">
          <img
            src={Teacher}
            alt="Teacher"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-1 lg:col-span-2 bg-white p-6 flex flex-col items-center lg:items-end gap-4 rounded-lg shadow-lg">
          <h2 className="text-4xl lg:text-6xl font-bold text-blue-800">
            Why Choose Us
          </h2>
          <p className="text-lg font-light text-center lg:text-right text-gray-700 w-full md:w-[70%]">
            Our mission is to provide a safe, nurturing environment where
            children can learn and grow through a variety of experiences.
          </p>
        </div>
        <div className="bg-blue-800 text-white p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg">
          <TbWriting className="text-5xl" />
          <p className="text-lg font-light text-center">
            A curriculum promoting academic excellence and community service.
          </p>
        </div>
        <div className="bg-blue-600 text-white p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg">
          <GrGrow className="text-5xl" />
          <p className="text-lg font-light text-center">
            Programs that inspire students to grow with integrity and empathy.
          </p>
        </div>
        <div className="bg-blue-800 text-white p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg">
          <PiShootingStarFill className="text-5xl" />
          <p className="text-lg font-light text-center">
            Opportunities to excel academically and in extracurriculars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
