import React from "react";
import BackgroundVideo from "../components/common/BackgroundVideo";
import Subnav from "../components/common/Subnav";

const subNavbarData = [
  {
    id: "pre-primary",
    text: "Pre primary",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ_7MC8Fl_xC8L93ouryMuOm0p4U3s7jAUA&s",
  },
  {
    id: "lower-school",
    text: "Lower School",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ_7MC8Fl_xC8L93ouryMuOm0p4U3s7jAUA&s",
  },
  {
    id: "middle-school",
    text: "Middle School",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ_7MC8Fl_xC8L93ouryMuOm0p4U3s7jAUA&s",
  },

  {
    id: "high-school",
    text: "High School",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ_7MC8Fl_xC8L93ouryMuOm0p4U3s7jAUA&s",
  },
  {
    id: "houses",
    text: "Houses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ_7MC8Fl_xC8L93ouryMuOm0p4U3s7jAUA&s",
  },
  {
    id: "extra-curricular",
    text: "Extra curricular",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ_7MC8Fl_xC8L93ouryMuOm0p4U3s7jAUA&s",
  },
];

const Houses = () => {
  return (
    <div className="flexjustify-center flex-col items-center   mt-[80px] ">
      <BackgroundVideo videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" />
      <div className="container my-16">
        <div>
          <Subnav subNavbarData={subNavbarData} />
        </div>
      </div>
    </div>
  );
};

export default Houses;
