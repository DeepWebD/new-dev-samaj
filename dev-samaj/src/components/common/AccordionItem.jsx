/* eslint-disable react/prop-types */
import { Plus, Minus } from "lucide-react";

const AccordionItem = (accordianItem) => {
  const { faq, isOpen, onClick } = accordianItem;

  return (
    <div
      className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${
        isOpen ? "bg-indigo-50 border-indigo-600" : ""
      } mb-8 lg:p-4`}
    >
      <button
        className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
        onClick={onClick}
      >
        <h5 className={isOpen ? "font-medium text-indigo-600" : ""}>
          {faq.question}
        </h5>
        {isOpen ? (
          <Minus
            className="w-6 h-6 text-indigo-600 transition duration-500"
            strokeWidth={1.6}
          />
        ) : (
          <Plus
            className="w-6 h-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
            strokeWidth={1.6}
          />
        )}
      </button>
      <div
        className={`accordion-content w-full overflow-hidden pr-4 transition-all duration-300 ${
          isOpen ? "max-h-[250px] mt-4" : "max-h-0"
        }`}
      >
        <p className="text-base text-gray-900 font-normal leading-6">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
