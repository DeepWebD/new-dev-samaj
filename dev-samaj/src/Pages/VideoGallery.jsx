/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";

// Video Player Component

const VideoPlayer = ({ src, title = "", thumbnail = "" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // useEffect(() => {
  //   // Reset controls and autoplay when video source changes
  //   setIsPlaying(false);
  //   setProgress(0);
  //   setVolume(0.5);
  //   setIsFullScreen(false);
  // }, [src]);

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progressPercent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressPercent);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  // Seek video
  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime =
        (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
    }
  };

  // Toggle fullscreen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  return (
    <div className="relative w-full bg-black group">
      {/* Video Container */}
      <div className="relative w-full aspect-video" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={src}
          poster={thumbnail}
          className="w-full h-full"
          onTimeUpdate={handleTimeUpdate}
          autoPlay
        />

        {/* Play Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button className="text-white text-4xl">▶</button>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-gray-800 p-2 flex items-center space-x-2">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="text-white hover:bg-gray-700 p-1 rounded"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>

        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-600 appearance-none"
        />

        {/* Volume */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-2 bg-gray-600 appearance-none"
        />

        {/* Fullscreen */}
        <button
          onClick={toggleFullScreen}
          className="text-white hover:bg-gray-700 p-1 rounded"
        >
          {isFullScreen ? "↙" : "⛶"}
        </button>
      </div>

      {/* Video Title */}
      <div className="p-2 bg-gray-900 text-white">{title}</div>
    </div>
  );
};

// Video Gallery Component
const VideoGallery = ({ videos }) => {
  const columns = 4;
  const gap = 4;

  const [selectedVideo, setSelectedVideo] = useState(
    videos.length > 0 ? videos[0] : null
  );

  // Update selected video if videos prop changes
  useEffect(() => {
    if (videos.length > 0) {
      setSelectedVideo(videos[0]);
    }
  }, [videos]);

  // Handle video selection
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  // Early return if no videos
  if (!videos || videos.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">No videos available</div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-[100px]">
      <h2 className="text-3xl text-secondary mb-12">
        <span className="border-b-0 hover:border-b-2 hover:border-primary">
          Video Library
        </span>
      </h2>
      {/* Main Video Player */}
      {selectedVideo && (
        <div className="mb-4 lg:w-3/4 mx-auto">
          <VideoPlayer
            src={selectedVideo.src}
            title={selectedVideo.title}
            thumbnail={selectedVideo.thumbnail}
          />
        </div>
      )}

      {/* Video Thumbnails Grid */}
      <div
        className={`grid grid-cols-2 md:grid-cols-${columns} gap-${gap} mt-12`}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleVideoSelect(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-36 sm:h-44 lg:h-48 object-cover rounded"
            />
            <p className="text-sm mt-2 truncate">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;

// Example Usage Component
export const VideoGalleryPage = () => {
  const sampleVideos = [
    {
      title: "Beautiful Nature Compilation",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "City Landscapes Around the World",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1664008628916-3b72a2136e22?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mountain Adventures",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ocean Waves and Beaches",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Beautiful Nature Compilation",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "City Landscapes Around the World",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1664008628916-3b72a2136e22?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mountain Adventures",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ocean Waves and Beaches",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <VideoGallery videos={sampleVideos} />;
};
