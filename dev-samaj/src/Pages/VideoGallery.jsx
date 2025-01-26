import React, { useState } from "react";
import { vidoes } from "../mockdata/video";

const VideoGallery = () => {
  console.log(vidoes);

  const [videoGallery, setVideGallery] = useState(vidoes);
  return (
    <div className=" text-black my-[90px] flex flex-col  items-center">
      <h1>Video Gallery</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-4">
        {videoGallery.map(({ videoLinlk }, index) => (
          <div key={index}>
            \
            <video
              className="h-48 w-full max-w-full rounded-lg object-cover object-center"
              controls
            >
              <source src={videoLinlk} />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
