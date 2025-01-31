import React from "react";
import { TbCricket } from "react-icons/tb";
import { IoFootball } from "react-icons/io5";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { FaChess } from "react-icons/fa";

const Sport = () => {
  return (
    <div className="flex py-20 justify-center items-center">
      <div className="text-center max-w-6xl mx-10">
        <h1 className="my-3 text-3xl font-bold tracking-tight text-secondary md:text-5xl ">
          Sports
        </h1>
        <div>
          <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl ">
            Introducing our latest service offering. Get started quickly and
            efficiently with our range of solutions. Designed to meet your needs
            using the latest technologies.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
          <div>
            <div className="bg-sky-100 p-8 rounded-full">
              <TbCricket className="text-4xl text-secondary font-bold" />
            </div>
            <p>Cricket</p>
          </div>
          <div>
            <div className="bg-sky-100 p-8 rounded-full">
              <IoFootball className="text-4xl text-secondary font-bold" />
            </div>
            <p>Football</p>
          </div>
          <div>
            <div className="bg-sky-100 p-8 rounded-full">
              <FaTableTennisPaddleBall className="text-4xl text-secondary font-bold" />
            </div>
            <p>Table Tennis</p>
          </div>
          <div>
            <div className="bg-sky-100 p-8 rounded-full">
              <FaChess className="text-4xl text-secondary font-bold" />
            </div>
            <p>Chess</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;
