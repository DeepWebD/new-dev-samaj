/* eslint-disable react/prop-types */
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const TeacherCard = ({teacher}) => {
    console.log(teacher)
  return (
    <div className="mx-10 w-80 px-6 py-6  text-center bg-secondary rounded-lg lg:mt-0 xl:px-10">
      <div className="space-y-4 xl:space-y-6">
        <img
          className="mx-auto rounded-full h-36 w-36"
          src={teacher?.image}
          alt="author avatar"
        />
        <div className="space-y-2">
          <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
            <h3 className="text-white">{teacher.name} </h3>
            <p className="text-indigo-300">{teacher.title}</p>
            <div className="flex justify-center mt-5 space-x-5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-400"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-400"
              >
                <span className="sr-only">Linkedin</span>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
