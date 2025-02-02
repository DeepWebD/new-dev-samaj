import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
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
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <div className="py-14">
      <div className=" mx-auto">
        {/* Header section */}
        <div className="space-y-4 px-4 text-center max-w-[600px] mx-auto mb-12">
          <h1 className="uppercase font-semibold text-orange-600 tracking-wide">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-4xl">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div className="px-4">
          <Slider ref={slider} {...settings} className="testimonial-slider">
            {TestimonialsData.map((item) => (
              <div key={item.id}>
                <div className="mx-2">
                  <div
                    className="relative p-6 h-[300px] "
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-600 via-gray-900/40" />
                    {/* Upper section */}
                    <div className="z-11 w-full h-full flex flex-row justify-between items-end text-white">
                      <div>
                        <p>Name</p>
                        <p>Role</p>
                      </div>
                      <div>
                        <button className="bg-primary px-4 py-2 rounded">
                          See More
                        </button>
                      </div>
                      {/* <div className="flex items-center gap-4 mb-4 z-10">
                        <div>
                          <p className="text-xl font-bold text-white">
                            {item.name}
                          </p>
                          <p className="text-white">{item.title}</p>
                        </div>
                      </div> */}

                      {/* Bottom section */}
                      {/* <div className="flex flex-col justify-between flex-grow">
                        <div className="flex items-center mt-4">
                          <a
                            href="#"
                            className="z-10 bg-primary text-white px-4 py-2"
                          >
                            See More
                          </a>
                        </div>
                      </div> */}
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
