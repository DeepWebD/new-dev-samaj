import { FaBus, FaBook, FaUtensils, FaFutbol } from "react-icons/fa"; // Importing icons from react-icons
import Transport from "../components/Transport/Transport";
import Library from "../components/Library/Library";
import Canteen from "../components/Canteen/Canteen";
import Sport from "../components/Sport/Sport";
const Facilities = () => {
  return (
    <div className="flex justify-center flex-col items-center p-2  mt-[180px] ">
      <div className="font-sans bg-blue-50">
        {/* Facilities Overview Section */}
        <section id="facilities" className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Transportation */}
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full inline-block">
                <FaBus className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Transportation</h3>
              <p className="mt-2 text-gray-600">
                Safe and reliable school buses for students.
              </p>
            </div>

            {/* Library */}
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full inline-block">
                <FaBook className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Library</h3>
              <p className="mt-2 text-gray-600">
                A vast collection of books and digital resources.
              </p>
            </div>

            {/* Canteen */}
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full inline-block">
                <FaUtensils className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Canteen</h3>
              <p className="mt-2 text-gray-600">
                Healthy and hygienic meals for students.
              </p>
            </div>

            {/* Sports Activity */}
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full inline-block">
                <FaFutbol className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Sports Activity</h3>
              <p className="mt-2 text-gray-600">
                Indoor and outdoor sports facilities.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Transport />
      <Library />
      <Canteen />
      <Sport />
    </div>
  );
};

export default Facilities;
