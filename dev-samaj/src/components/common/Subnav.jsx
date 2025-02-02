/* eslint-disable react/prop-types */
import React from "react";

const Subnav = ({ subNavbarData }) => {
  return (
    <nav className="flex justify-center items-center py-4 border-b-[1px]  ">
      <ul className="flex justify-center items-center gap-8">
        {subNavbarData.map((navItem) => {
          return (
            <li key={navItem.id} className="hover:text-primary">
              {navItem.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Subnav;
