import { useState } from "react";
import Hero from "../Hero/Hero";
import DividerWithText from "../common/DividerWithText";
import { FaRoute } from "react-icons/fa";
import { RouteModal } from "../common/Path/RouteModal";
const transportHeroData = {
  title: "Transport Service",
  description: `The school has a well organized transport facility for the students on all major routes. The routes are drawn up well in advance and the students can avail the facility according to their need after consulting the school transport In-charge. The drivers are authorized to stop buses at the designated stops only and the list of stops is prepared keeping in view the convenience and security of all bus commuters and is not subject to change. The school has a fleet of CNG Buses for the students on the existing routes only. No student will be allowed to go by bus other than the one allotted to him/her.`,
  heroImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WrKp827UA5AU8txRUj5dOcFZfJjut1ICbw&s",
  isButtonsNeed: false,
  isNumberCountNeed: false,
};

const busServiceRoute = [
  "Route 1",
  "Route 2",
  "Route 3",
  "Route 4",
  "Route 5",
  "Route 6",
];
const Transport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();

    setIsModalOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  return (
    <section>
      <RouteModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Hero heroData={transportHeroData} />

      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
        <DividerWithText text="Bus Routes" />
        {busServiceRoute.map((item, index) => {
          return (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="flex justify-between bg-gray-100 items-center h-full rounded pr-6">
                <div className=" flex p-4  items-center gap-4">
                  <FaRoute className="text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
                <div>
                  <a
                    href=""
                    onClick={(e) => openModal(e)}
                    className="text-primary font-bold"
                  >
                    See Route
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Transport;
