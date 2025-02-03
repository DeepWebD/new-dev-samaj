import { useState } from "react";
import { faker } from "@faker-js/faker";
import Slider from "react-slick";
import ModalComponent from "../../components/Modal/ModalComponent";
const Timeline = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

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
      description: faker.lorem.sentence(15),
      longDescription: faker.lorem.sentence(100),
      title: faker.company.catchPhrase(),
      image: faker.image.url(),
    });
    year = year + 5;
  }

  const openModal = (e, id) => {
    e.preventDefault();
    const data = timeline.find((item) => item.id == id);
    setModalData(data);
    setIsModalOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  console.log(timeline);
  return (
    <>
      <ModalComponent
        modalData={modalData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className="our-story ">
        <h1 className="p-8  text-4xl text-secondary font-bold ">Our Story</h1>
        <Slider {...setting}>
          {timeline.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 border border-gray-200 h-64">
                  {/* upper section */}

                  <div>
                    <h3 className="text-3xl font-bold text-secondary">
                      {item.year}
                    </h3>
                    <p className="text-lg text-black/80">{item.description}</p>
                  </div>
                  <div className="py-6 space-y-4">
                    <a
                      href="#"
                      onClick={(e) => openModal(e, item.id)}
                      className="text-2xl font-thin text-secondary border-b-[1px] border-secondary "
                    >
                      Learn More
                    </a>
                  </div>

                  {/* bottom section */}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Timeline;
