/* eslint-disable react/prop-types */

const Path = ({ routes }) => {
  return (
    <div className=" p-4 max-h-[500px] overflow-y-auto">
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {routes.map((item, index) => {
          if (index % 2) {
            return (
              <div key={index} className="flex md:contents flex-row-reverse">
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">
                    {item.title}
                  </h3>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2" />
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300" />
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2" />
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Path;
