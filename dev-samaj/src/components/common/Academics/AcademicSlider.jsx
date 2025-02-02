/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-full  overflow-hidden border border-gray-300 rounded-lg">
      {/* Slider Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
          >
            {/* Text Content (First in Mobile, Left in Desktop) */}
            <div className="w-full md:w-1/2 p-4 md:p-8 order-2 md:order-1">
              <h2 className="mb-4">
                <span className="text-2xl md:text-3xl text-secondary font-bold  hover:border-b-2 hover:border-primary transition-all delay-100 cursor-pointer">
                  {slide.title}
                </span>
              </h2>
              <p className="text-gray-700 mb-4">{slide.desc}</p>
              <blockquote className="italic text-gray-600 mb-4">
                {slide.quote}
              </blockquote>
              <p className="text-gray-800 font-semibold">
                - {slide.techaerName}
              </p>
            </div>

            {/* Image (Second in Mobile, Right in Desktop) */}
            <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center order-1 md:order-2">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Top-Left Corner, Next to Each Other) */}
      <div className="absolute top-4 left-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
