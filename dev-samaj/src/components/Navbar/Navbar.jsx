import React from "react";

import { useState } from "react";
import { NavbarMenu } from "../../mockdata/data";
import { MdLocationOn, MdMenu } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSchoolList, setShowSchoolList] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            {/* <FaSchool className="text-3xl text-secondary gap-2" /> */}
            <img src={Logo} alt="logo" className="w-12 h-12" />
            <div>
              <h1 className="text-orange-500 font-semibold text-xl">
                Dev Samaj School
              </h1>
              <div className="flex justify-start items-center gap-1 text-slate-700 text-sm font-light">
                <MdLocationOn className="text-secondary" />
                <p>Nehru Nagar</p>
                <p className="relative flex text-secondary items-center">
                  <span>change</span>
                  <IoIosArrowForward
                    onClick={() => setShowSchoolList(!showSchoolList)}
                  />
                  {showSchoolList && (
                    <div className=" h-[90px] w-[150px] p-4  bg-secondary shadow-2xl text-white flex flex-col  rounded-xl font-semibold my-4 absolute top-1 left-10 z-50">
                      <p className="my-1 cursor-pointer hover:text-black">Nehru Nagar</p>
                      <p className="my-1 cursor-pointer hover:text-black">Sukhdev Nagar</p>
                    </div>
                  )}
                </p>
              </div>
            </div>
          </div>
          {/* Menu Section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button Section */}
          <div className="hidden lg:block space-x-6">
           
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
              Login
            </button>
          </div>
          {/* Mobile Hamnurger Menu  */}
          <div className="lg:hidden">
            <MdMenu className="text-4xl" onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </motion.div>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
