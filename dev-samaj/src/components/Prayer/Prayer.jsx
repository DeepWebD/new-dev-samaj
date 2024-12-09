import React from "react";
import PrayerBg from "../../assets/PrayerBG.jpg";

const Prayer = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${PrayerBg})` }}
    >
      <div className="bg-gradient-to-r from-violet-600 to-sky-900 opacity-90 h-full flex flex-col lg:flex-row gap-4 p-10 ">
        <div className="w-full lg:w-1/2 flex justify-center items-center flex-col ">
          <h2 className="text-white text-3xl lg:text-6xl font-bold text-center">
            We value our culture and tradition
          </h2>
        </div>
        <div className="w-full lg:w-1/2 h-[70%] flex justify-center items-center border-4 border-white rounded-lg ">
          <p className="text-white text-lg font-extralight p-10 leading-[2.5] h-full overflow-y-scroll font-[fantasy]">
            " You are in our thoughts and hoping you will be Soon in better health
            Get well soon. You are feeling down And so am I with you not around.
            Hope you get back in The swing of things real soon. Get well soon.
            Hope this get well prayer Adds sunshine to your day And shows that
            you are thought of In a warm and special way. Get well soon. I wish
            I had a magic wand To make it go away I'd wave my sceptre over you
            Until you were okay. Get well soon. With the warmest of wishes We
            just want to say Hope that you are feeling much better today Get
            well soon."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prayer;
