import { faker } from "@faker-js/faker";
import Slider from "react-slick";

const Timeline = () => {
  const timeline = [];
  const setting = {
    dots: true,
    arrow: true,
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

  for (let year = 1965; year <= 2024; ) {
    timeline.push({
      id: faker.string.uuid(),
      year: year,
      description: faker.lorem.sentence(),
      title: faker.company.catchPhrase(),
      image: faker.image.url(),
    });
    year = year + 5;
  }

  console.log(timeline);
  return (
    <div>
      <Slider {...setting}>
        {timeline.map((item) => {
          return (
            <div key={item.id} className="h-[400px]">
              <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                {/* upper section */}
                <div className="flex justify-start items-center gap-5">
                  <div>
                    <h3>{item.year}</h3>
                    <p className="text-lg text-black/80">{item.description}</p>
                  </div>
                </div>
                {/* bottom section */}
                <div className="py-6 space-y-4">
                  <a>Learn More</a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Timeline;
