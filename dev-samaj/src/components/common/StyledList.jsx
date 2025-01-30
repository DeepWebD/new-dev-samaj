/* eslint-disable react/prop-types */
const StyledList = ({ text }) => {
  return (
    <li className="flex items-start lg:col-span-1 gap-4 bg-slate-100 p-4 rounded-lg shadow-sm hover:border-secondary hover:border-r-2 hover:rounded-r-none ">
      <div className="flex-shrink-0">
        <svg
          className="w-5 h-5 text-secondary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <p className="ml-3 leading-5 text-gray-800 text-lg font-thin">{text}</p>
    </li>
  );
};

export default StyledList;
