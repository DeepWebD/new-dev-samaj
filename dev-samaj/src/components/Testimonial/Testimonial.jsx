import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { title } from "framer-motion/client";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
    title:'Student',
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
    title:'Student',
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    title:'Teacher',
    delay: 0.8,
  },
  {
    id: 5,
    name: "Ariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    title:'Student',
    delay: 1.1,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl ">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                // <div
                //   key={item.id}
                //   className="flex flex-col gap-4 p-8 shadow-lg mx-4 bg-secondary"
                // >
                //   {/* stars */}
                //   <div className="text-violet-500 flex gap-2">
                //    <FaStar className="text-violet-500"/>
                //    <FaStar className="text-violet-500"/>
                //    <FaStar className="text-violet-500"/>
                //    <FaStar className="text-violet-500"/>
                //    <FaStar className="text-violet-500"/>

                //   </div>
                //   <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
                //     I've been using XYZ for over a year now and their customer
                //     service is excellent! Whenever I have a question, the team
                //     is always available and willing to help. Highly recommend!
                //   </p>
                //   <div className="mt-6 flex items-center gap-6 ">
                //     <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                //       <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                //         <img
                //           alt=""
                //           src="https://randomuser.me/api/portraits/women/2.jpg"
                //           width={50}
                //           height={50}
                //           decoding="async"
                //           data-nimg={1}
                //           className="inline-block "
                //           loading="lazy"
                //           style={{ color: "transparent" }}
                //         />
                //       </div>
                //     </div>
                //     <div>
                //       <p className="leading-relaxed tracking-wide text-gray-200">
                //         Melissa Smith
                //       </p>
                //       <p className="text-xs leading-relaxed tracking-wide text-gray-400">
                //         Marketing Manager
                //       </p>
                //     </div>
                //   </div>
                // </div>

                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl border-2 bg-secondary">
                    {/* upper section */}
                    <div className="text-violet-500 flex gap-2">
                      <FaStar className="text-violet-500" />
                      <FaStar className="text-violet-500" />
                      <FaStar className="text-violet-500" />
                      <FaStar className="text-violet-500" />
                      <FaStar className="text-violet-500" />
                    </div>
                     {/* bottom section */}
                     <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-50">{item.text}</p>
                    </div>
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-primary">
                          {item.name}
                        </p>
                        <p className="text-white">{item.title}</p>
                      </div>
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
