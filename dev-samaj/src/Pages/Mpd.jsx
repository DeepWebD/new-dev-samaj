/* eslint-disable react/prop-types */
import React from "react";
import Table from "../components/common/MPD/Table";
import BackgroundVideo from "../components/common/BackgroundVideo";
const Mpd = ({ tableProps }) => {
  return (
    <div className=" flex justify-center flex-col items-center  ">
      <BackgroundVideo
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" // Replace with your video path
        overlayText="Welcome to Our Website"
        overlayTextStyle="text-center"
      />
      {/* <div className=" h-screen">
        <Table tableProps={tableProps} />
      </div> */}
    </div>
  );
};

export default Mpd;
