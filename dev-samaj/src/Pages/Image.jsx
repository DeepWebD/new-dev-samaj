import React from "react";
import { useLocation } from "react-router-dom";

const Image = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="flex justify-center items-center p-24 h-[90vh] mt-[80px]">
      <h1 className="text-4xl ">Image Gallery</h1>
    </div>
  );
};

export default Image;
