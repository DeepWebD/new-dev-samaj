import React from "react";
import BackgroundVideo from "../components/common/BackgroundVideo";
import Subnav from "../components/common/Subnav";

const activities = [
  {
    id: 1,
    title: "Sports",
    description:
      "Join our sports teams and compete in football, basketball, volleyball, and more. Stay active and build teamwork skills!",
    image:
      "https://images.unsplash.com/photo-1738168601626-00a692f3638d?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    cta: "Join Now",
  },
  {
    id: 2,
    title: "Music & Arts",
    description:
      "Explore your creative side with our music band, choir, and art club. Perform at school events and showcase your talent!",
    image:
      "https://images.unsplash.com/photo-1738571574302-3312deda0aa3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Debate Club",
    description:
      "Sharpen your public speaking and critical thinking skills by participating in debates and competitions.",
    image:
      "https://images.unsplash.com/photo-1738527743352-43e022273927?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    cta: "Join Now",
  },
  {
    id: 4,
    title: "Science Club",
    description:
      "Dive into exciting experiments, robotics, and STEM projects. Innovate and explore the world of science!",
    image:
      "https://images.unsplash.com/photo-1738008896551-9ab767d9e6ac?q=80&w=3598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    cta: "Learn More",
  },
];

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

const ExtraCarriculum = () => {
  return (
    <div className="flexjustify-center flex-col items-center   mt-[80px] ">
      <BackgroundVideo videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" />
      <div className="container my-16">
        <div>
          <Subnav subNavbarData={subNavbarData} />
        </div>

        <div className=" py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-secondary mb-8">
              Extracurricular Activities
            </h1>
            <p className="text-lg text-center text-gray-600 mb-12">
              Discover a wide range of activities to enhance your skills, make
              new friends, and have fun!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      {activity.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                      {activity.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraCarriculum;
