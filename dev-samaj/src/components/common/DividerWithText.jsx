/* eslint-disable react/prop-types */
const DividerWithText = ({ text }) => {
  return (
    <div className="flex items-center w-full my-4">
      <div className="flex-grow border-t border-secondary"></div>
      <span className="text-2xl font-extrabold leading-8 text-secondary sm:text-3xl sm:leading-9">
        {text}
      </span>
      <div className="flex-grow border-t border-secondary"></div>
    </div>
  );
};

export default DividerWithText;
