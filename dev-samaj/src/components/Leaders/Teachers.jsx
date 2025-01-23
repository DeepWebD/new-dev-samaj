
import { motion } from "framer-motion";
import { TeacherData } from "../../mockdata/data";



const Teachers = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-gray-300">
            Other View
          </h1>
          <p className="font-semibold text-3xl">
            Meet Our <span className="text-primary">Leaders</span>
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {TeacherData.map((teacher) => {
            return (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: teacher.delay,
                }}
                className=" border-secondary/20  flex flex-col justify-start items-center gap-4 h"
              >
                <div className="relative hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
                  <img
                    src={teacher.image}
                    className=" h-[300px] w-[250px] object-cover border rounded-lg "
                  />
                  <div className="w-[100%] h-[50px] bg-primary absolute bottom-0 border rounded-b-lg"></div>
                  <div className="w-[100%] flex flex-col justify-center items-center absolute bottom-0  text-white ">
                    <div className="text-white">
                      <h1 className="text-lg font-semibold ">{teacher.name}</h1>
                      <p className="text-sm ">{teacher.subject}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Teachers;