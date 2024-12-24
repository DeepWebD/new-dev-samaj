import React from "react";
import Slider from "react-slick";
import PrayerCard from "./PrayerCard";
import {prayers} from '../../mockdata/prayer'
const PrayerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

  };
// const getDay = (i) => {
//     switch (i) {
//         case 0:
//             return 'Sunday';
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thursday';
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         default:
//             return '';
//     }
// };


  return (
    <div className="w-full prayer-slider">
      <Slider {...settings}>
        {prayers.map(prayer=>{
            return (
                <div key={prayer.id}>
                    <PrayerCard prayer={prayer}/>
                </div>
            )
        })}
        {/* <div>
          <PrayerCard />
        </div>
        <div>
          <PrayerCard />
        </div>
        <div>
          <PrayerCard />
        </div>
        <div>
          <PrayerCard />
        </div>
        <div>
          <PrayerCard />
        </div>
        <div>
          <PrayerCard />
        </div>
        <div>
          <PrayerCard />
        </div> */}
      </Slider>
    </div>
  );
};

export default PrayerSlider;