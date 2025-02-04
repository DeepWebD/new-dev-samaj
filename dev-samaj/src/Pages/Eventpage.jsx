/* eslint-disable react/prop-types */
import React from "react";
import DividerWithText from "../components/common/DividerWithText";

// EventCard Component
const EventCard = ({ image, title, date, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {date}
        </span>
      </div>
    </div>
  );
};

// EventList Component
const EventList = ({ events, title }) => {
  return (
    <div className="container mx-auto px-4 mb-16 ">
      <h2 className="text-3xl font-bold mb-14 text-secondary  ">
        <DividerWithText text={title} />
        {/* <span className="border-b-2 border-orange-600 pb-2"> {title}</span> */}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

// Main EventPage Component
const EventPage = () => {
  const upcomingEvents = [
    {
      image:
        "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
      title: "Science Fair",
      date: "2023-11-15",
      description:
        "Join us for the annual science fair showcasing innovative projects from students.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorXbVtUTt5xBiceQPALPnOersj1cQ-bmbLA&s",
      title: "Music Concert",
      date: "2023-12-01",
      description:
        "Enjoy an evening of music performed by our talented students.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzGqDifK-kwjKAe_Yzwd0MGreO23Uy8mmmg&s",
      title: "Sports Day",
      date: "2023-10-10",
      description: "A day filled with fun and competitive sports activities.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgmLwXg3cXV7hOE9iUF_QiT3bsANhi91J3JBRDYBozsxz3pOLVBvuSKCmI0JwDxdvIjQ&usqp=CAU",
      title: "Art Exhibition",
      date: "2023-09-20",
      description:
        "Explore the creative works of our students in this art exhibition.",
    },
    {
      image:
        "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
      title: "Science Fair",
      date: "2023-11-15",
      description:
        "Join us for the annual science fair showcasing innovative projects from students.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorXbVtUTt5xBiceQPALPnOersj1cQ-bmbLA&s",
      title: "Music Concert",
      date: "2023-12-01",
      description:
        "Enjoy an evening of music performed by our talented students.",
    },
  ];

  const pastEvents = [
    {
      image:
        "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
      title: "Science Fair",
      date: "2023-11-15",
      description:
        "Join us for the annual science fair showcasing innovative projects from students.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorXbVtUTt5xBiceQPALPnOersj1cQ-bmbLA&s",
      title: "Music Concert",
      date: "2023-12-01",
      description:
        "Enjoy an evening of music performed by our talented students.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzGqDifK-kwjKAe_Yzwd0MGreO23Uy8mmmg&s",
      title: "Sports Day",
      date: "2023-10-10",
      description: "A day filled with fun and competitive sports activities.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgmLwXg3cXV7hOE9iUF_QiT3bsANhi91J3JBRDYBozsxz3pOLVBvuSKCmI0JwDxdvIjQ&usqp=CAU",
      title: "Art Exhibition",
      date: "2023-09-20",
      description:
        "Explore the creative works of our students in this art exhibition.",
    },
  ];

  return (
    <div className="py-10 mt-[100px]">
      <EventList events={upcomingEvents} title="Upcoming Events" />
      <EventList events={pastEvents} title="Past Events" />
    </div>
  );
};

export default EventPage;
