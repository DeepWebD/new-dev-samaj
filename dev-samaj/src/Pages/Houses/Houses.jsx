import BackgroundVideo from "../../components/common/BackgroundVideo";
import Subnav from "../../components/common/Subnav";
import { Award } from "lucide-react";

import { houses, competitions } from "../../mockdata/houses";
import { HouseCard } from "./HouseCard";
import { CompetitionCard } from "./CompetitionCard";

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
      {/* Houses Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Houses</h2>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </section>

      {/* Competitions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Current Competitions
            </h2>
            <Award className="w-8 h-8 text-yellow-500" />
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitions.map((competition) => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Houses;
