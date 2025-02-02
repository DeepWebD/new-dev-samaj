import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const BackgroundVideo = ({ videoSrc, overlayText, overlayTextStyle }) => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(true); // State to track play/pause

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Function to scroll down by screen height
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by the height of the viewport
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="relative w-full h-100vh sm:h-[60vh] overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className={`text-white text-6xl font-bold ${overlayTextStyle}`}>
          {overlayText}
        </h1>
      </div> */}

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 left-4 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <FaPause className="text-sm sm:text-2xl" />
        ) : (
          <FaPlay className="text-sm sm:text-2xl" />
        )}
      </button>

      {/* Scroll Down Arrow with Bouncing Animation */}
      <button
        onClick={scrollDown}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all animate-bounce hover:text-primary"
        aria-label="Scroll Down"
      >
        <IoIosArrowDown className="text-sm sm:text-2xl" />
      </button>
    </div>
  );
};

export default BackgroundVideo;
