/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const ModalComponent = ({ isModalOpen, setIsModalOpen, modalData }) => {
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  console.log("modalData ModalComponent------->", modalData);

  // Close modal when pressing ESC key
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      {/* <button
        className="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition"
        onClick={openModal}
      >
        Click to Open modal
      </button> */}

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
              <div className="max-w-screen-lg mx-auto p-5">
                <div className="mb-10 rounded overflow-hidden flex flex-col  ">
                  <h1 className="text-3xl font-bold text-secondary">
                    {modalData?.year}
                  </h1>
                  <a
                    href="#"
                    className="max-w-3xl font-semibold inline-block text-gray-700 mb-2"
                  >
                    {modalData?.title}
                  </a>
                  <a href="#">
                    <img
                      className="w-full my-4"
                      src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                      alt="Sunset in the mountains"
                    />
                  </a>
                  <p className="text-gray-700 text-base leading-8 max-w-2xl mx-auto">
                    {modalData?.longDescription}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
