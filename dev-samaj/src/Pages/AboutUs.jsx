import image6 from "../assets/banner2.jpg";
import HeroImg from "../assets/hero.png";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Timeline from "../components/Timeline/Timeline";
import ModalComponent from "../components/Modal/ModalComponent";
const AboutUs = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-secondary py-4  h-[60vh] flex flex-row justify-start items-end">
        <img
          alt=""
          src={image6}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent "
        />
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-thin tracking-tight text-white ">
              <span className="border-b-[1px] border-white">
                VISION and HISTORY
              </span>
            </h2>
            <p className="mt-2 text-pretty text-lg font-thin text-white sm:text-xl/8 ">
              Wesleyan's mission is to be a Christian school of academic
              excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[650px] relative">
        {/* brand info */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0"
        >
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl text-secondary font-extralight ">
              <span className="border-b-[1px] border-secondary">About</span>
            </h2>
            <h3 className="text-3xl lg:text-4xl  font-bold !leading-tight text-secondary">
              <span>Our Philosophy</span>
            </h3>
            <p className="font-light text-lg">
              An English medium school in Nehru Nagar, Delhi, that was
              established in 1966. The school's address is Ring Road, Nehru
              Nagar, Delhi - 110065. 
              </p>
              <p className="font-light text-lg">
              Dev Samaj may also refer to a religious and
              social reform society founded in Lahore in 1887 by Pandit Shiv
              Narayan Agnihotri. 
              </p>
              <p className="font-light text-lg">
              The society's goal is to serve humanity without
              regard to caste, creed, color, or country. 
            </p>
          </div>
        </motion.div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
      {/* Mission Body */}
      <div className="flex justify-center items-center py-20 my-20 bg-primary w-[100vw]">
        <p className="text-3xl mx-auto max-w-3xl text-center font-thin text-white">
          Wesleyan’s mission is to be a Christian school of academic excellence
          by providing each student a diverse college preparatory education
          guided by Christian principles and beliefs; by challenging and
          nurturing the mind, body, and spirit; and by developing responsible
          stewardship in our changing world.
        </p>
      </div>

      {/* Video Section */}
      <div className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Video Section */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              {/* Video Title Overlay */}
              <div className="absolute top-4 left-4 z-10 flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <div className="w-8 h-8 flex items-center justify-center text-gray-800 font-bold text-lg">
                    W
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
                    The Power of AND
                  </span>
                  <span className="text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded mt-1">
                    Wesleyan School
                  </span>
                </div>
              </div>

              <div className="relative pt-[56.25%]">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Quote Section */}
            <div className="lg:pl-8">
              <hr />
              <div className="space-y-6 py-4">
                <Quote size={42} className="text-[#B4975A]" />
                <blockquote className="text-[28px] font-light text-[#4A4A4A] leading-tight tracking-tight">
                  It's not a matter of choosing faith or intellect. It's faith
                  and intellect working together to create the best possible
                  education.
                </blockquote>
                <div className="pt-2">
                  <p className="text-[#4A4A4A] font-medium tracking-wider text-sm">
                    CHRIS CLEVELAND
                  </p>
                  <p className="text-[#B4975A] text-sm tracking-wider">
                    HEAD OF SCHOOL
                  </p>
                </div>
                <hr className="border-t border-gray-200 w-24" />
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* TimeLine Section */}
      <div className="container my-12">
        <Timeline />
      </div>

      {/* Mission Body */}
      <div className="flex justify-center text-center items-center py-20 my-20 bg-primary w-[100vw]">
        <p className="text-3xl mx-auto max-w-xl text-center font-thin text-white">
          "The earth is the Lord's, and the fulness thereof; the world, and they
          that dwell therein." Psalm 24:1
        </p>
      </div>

      {/* Video Section */}
      <div className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Video Section */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="relative pt-[56.25%]">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Quote Section */}
            <div className="lg:pl-8">
              <hr />
              <div className="space-y-6 py-8">
                <Quote size={42} className="text-[#B4975A]" />
                <blockquote className="text-[28px] font-light text-[#4A4A4A] leading-tight tracking-tight">
                  As an English teacher, being able to integrate faith and
                  spirituality and ideas about God in the classroom is so
                  important to me.
                </blockquote>
                <div className="pt-2">
                  <p className="text-[#4A4A4A] font-medium tracking-wider text-sm">
                    Dawson Zimmerman
                  </p>
                  <p className="text-[#B4975A] text-sm tracking-wider">
                    HEAD OF SCHOOL
                  </p>
                </div>
                <hr className="border-t border-gray-200 w-24" />
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <ModalComponent />
    </>
  );
};

export default AboutUs;
