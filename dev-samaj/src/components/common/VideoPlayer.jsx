import React, { useRef } from 'react';
import VideoBg from '../../assets/videoBg.mp4';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <div className="w-full h-[350px] md:w-[350]  flex flex-col items-center">
      <video
        ref={videoRef}
        controls
        autoPlay
        className="w-full h-[350px] md:w-[350] border flex items-center rounded-lg object-cover"
      >
        <source src={VideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;