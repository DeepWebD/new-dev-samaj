import Hero from "../Hero/Hero";
import DividerWithText from "../common/DividerWithText";
import { FaBook } from "react-icons/fa";

const libraryService = [
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
  "Service 5",
  "Service 6",
];

const libraryData = {
  title: "Library",
  description: `A library is a treasure trove of knowledge, offering a quiet sanctuary for learning, exploration, and creativity. It houses a vast collection of books, ranging from classic literature to modern research, alongside digital resources like e-books, journals, and databases. Libraries are more than just repositories of information; they are dynamic spaces that foster intellectual growth and community engagement. With dedicated study areas, access to technology, and expert assistance from librarians, they support students, researchers, and lifelong learners. Libraries also host events like book clubs, workshops, and author talks, encouraging a love for reading and continuous learning. In a world increasingly dominated by digital distractions, libraries remain a cornerstone of education, providing free and equitable access to information for all. They inspire curiosity, nurture imagination, and empower individuals to achieve their full potential. Truly, libraries are the heart of any educational institution or community`,
  heroImage:
    "https://images.pexels.com/photos/8500625/pexels-photo-8500625.jpeg",
  isButtonsNeed: false,
  isNumberCountNeed: false,
};
const Library = () => {
  return (
    <section>
      <Hero heroData={libraryData} />
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
        <DividerWithText text="Library Service" />
        {libraryService.map((item, index) => {
          return (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="flex justify-between bg-gray-100 items-center h-full rounded">
                <div className=" flex p-4  items-center gap-4">
                  <FaBook className="text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Library;
