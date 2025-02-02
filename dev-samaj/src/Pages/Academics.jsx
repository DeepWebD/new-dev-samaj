import BackgroundVideo from "../components/common/BackgroundVideo";
import Subnav from "../components/common/Subnav";
import AboutAcademics from "../components/common/Academics/AboutAcademics";
import AcademicSlider from "../components/common/Academics/AcademicSlider";
import TeacherSlider from "../components/common/Academics/TeacherSlider";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TeacherCard from "../components/common/Academics/TeacherCard";

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

const aboutAcademicData = {
  title: "Montessori School",
  subTitle: "  Establishing a Love of Learning",
  para1: ` Imagine a classroom where the joy of learning is propelled by the
    interests of the children, where curiosity is encouraged and the innate
    human desire to understand, experiment and create is celebrated. This is
    The Summit Montessori School, and we are proud to use the Montessori
    philosophy to teach children as young as 18 months.`,
  para2: `The Summit Montessori School gives children the opportunity to learn
    from their peers, engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1.`,
};

const pillers = [
  {
    id: "1",
    title: `The Summit Montessori`,
    desc: `The Summit Montessori School gives children the opportunity to learn
    from their peers, engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1.`,
    quote: `engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1`,
    techaerName: "Mr Shankar Sharma",
    imageUrl:
      "https://thumbs.dreamstime.com/b/male-student-working-desk-chinese-school-26363958.jpg",
  },
  {
    id: "2",
    title: `The Summit Montessori`,
    desc: `The Summit Montessori School gives children the opportunity to learn
    from their peers, engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1.`,
    quote: `engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1`,
    techaerName: "Mr Shankar Sharma",
    imageUrl:
      "https://thumbs.dreamstime.com/b/child-girl-schoolgirl-elementary-school-student-123686003.jpg",
  },
  {
    id: "3",
    title: `The Summit Montessori`,
    desc: `The Summit Montessori School gives children the opportunity to learn
    from their peers, engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1.`,
    quote: `engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1`,
    techaerName: "Mr Shankar Sharma",
    imageUrl:
      "https://thumbs.dreamstime.com/b/male-student-working-desk-chinese-school-26363958.jpg",
  },
  {
    id: "4",
    title: `The Summit Montessori`,
    desc: `The Summit Montessori School gives children the opportunity to learn
    from their peers, engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1.`,
    quote: `engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1`,
    techaerName: "Mr Shankar Sharma",
    imageUrl:
      "https://thumbs.dreamstime.com/b/male-student-working-desk-chinese-school-26363958.jpg",
  },
  {
    id: "5",
    title: `The Summit Montessori`,
    desc: `The Summit Montessori School gives children the opportunity to learn
    from their peers, engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1.`,
    quote: `engage in meaningful open-ended play and develop a
    solid foundation in academic and social/emotional learning that serves
    them well when they move on to Lower School starting in Grade 1`,
    techaerName: "Mr Shankar Sharma",
    imageUrl:
      "https://thumbs.dreamstime.com/b/child-girl-schoolgirl-elementary-school-student-123686003.jpg",
  },
];

const Academics = () => {
  return (
    <>
      <div className="mt-[80px]">
        <BackgroundVideo
          videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" // Replace with your video path
          overlayText="Welcome to Our Website"
          overlayTextStyle="text-center"
        />
        <div className="container my-16">
          <div className="hidden sm:block">
            <Subnav subNavbarData={subNavbarData} />
          </div>
          <div className="my-16">
            <AboutAcademics aboutAcademicData={aboutAcademicData} />
          </div>
          <div className="my-16">
            <AcademicSlider slides={pillers} />
          </div>
        </div>
      </div>
      <div className="my-16">
        <TeacherSlider />
      </div>
      <div className="my-16">
        <TeacherCard />
      </div>
    </>
  );
};

export default Academics;
