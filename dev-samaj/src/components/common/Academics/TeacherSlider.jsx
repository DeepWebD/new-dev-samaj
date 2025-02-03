import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://media.istockphoto.com/id/486325400/photo/teacher-asking-her-students-a-question.jpg?s=612x612&w=0&k=20&c=gA6YxA-uGplqjyZfTKBuOcAXEZz7S_KqgGgEGl8YztQ=",
    title: "Student",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
    title: "Student",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    title: "Teacher",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Ariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    title: "Student",
    delay: 1.1,
  },
  {
    id: 6,
    name: "Kristen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    title: "Teacher",
    delay: 0.8,
  },
  {
    id: 7,
    name: "Ariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    title: "Student",
    delay: 1.1,
  },
];

const TeacherSlider = () => {
  // const [cardStyle, setCardStyle] = useState({colorGradientHeight:});
  const slider = React.useRef(null);

  const next = () => {
    slider.current?.slickNext();
  };

  const previous = () => {
    slider.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardMouseEnterHandler = () => {
    console.log("Card Mouse Enter");
  };

  const cardMouseLeaveHandler = () => {
    console.log("Card Mouse Leave");
  };

  return (
    <div className="py-14">
      <div className=" mx-auto">
        {/* Header section */}
        <div className="space-y-4 px-4 text-center max-w-4xl mx-auto mb-12">
          <h1 className="uppercase text-3xl text-secondary tracking-wide">
            Meet The Teachers
          </h1>
          <p className="text-xl tracking-wider text-gray-700">
            What sets The Summit Country Day School apart? Highly-trained
            faculty, state-of-the-art resources and innovative curriculum.
          </p>
        </div>
        {/* Testimonial cards section */}
        <div className="px-4">
          <Slider ref={slider} {...settings} className="testimonial-slider">
            {TestimonialsData.map((item) => (
              <div key={item.id}>
                <div className="mx-2">
                  <div
                    className="relative h-[300px]  border border-gray-300 scale-100 hover:scale-105 transition-all delay-100"
                    onMouseEnter={cardMouseEnterHandler}
                    onMouseLeave={cardMouseLeaveHandler}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="absolute h-[300px] w-full"
                    />
                    <div className="absolute z-10 bg-gradient-to-t from-gray-700  hover:from-blue-800 to-transparent w-full bottom-[-2px]  h-[150px] " />
                    {/* Upper section */}
                    <div className="absolute h-full w-full flex flex-row justify-between items-end text-white z-20 p-4">
                      <div>
                        <p className="font-bold text-2xl">Mr Mohit Verma</p>
                        <p>Hindi Teacher</p>
                      </div>
                      <div>
                        <button className="bg-primary px-4 py-2 rounded scale-100 shadow-sm hover:shadow-md hover:scale-110 transition-all delay-100">
                          See More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={previous}
              className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSlider;
