/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Path from "./Path";

const routes = [
  {
    title: "Point 1",
    description: "Description of the first event.",
  },
  {
    title: "Point 2",
    description: "Description of the second event.",
  },
  {
    title: "Point 3",
    description: "Description of the third event.",
  },
  {
    title: "Point 4",
    description: "Description of the fourth event.",
  },
  {
    title: "Point 5",
    description: "Description of the first event.",
  },
  {
    title: "Point 6",
    description: "Description of the second event.",
  },
  {
    title: "Point 7",
    description: "Description of the third event.",
  },
  {
    title: "Point 8",
    description: "Description of the fourth event.",
  },
];
export const RouteModal = ({ isModalOpen, setIsModalOpen }) => {
  const closeModal = () => {
    console.log("-------close-------");
    setIsModalOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  // Close modal when pressing ESC key
  const handleKeyDown = (event) => {
    console.log("-------Key close-------");
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    console.log("-------adding handleKeyDown event-------");
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      {isModalOpen && (
        <div
          id="modelConfirm"
          className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
        >
          <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-2xl">
            <div className="flex flex-col  p-2">
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <IoMdClose className="text-2xl" />
              </button>
              <h2 className="text-3xl text-secondary font-bold mb-12 pl-4">
                Route
              </h2>
              <Path routes={routes} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
