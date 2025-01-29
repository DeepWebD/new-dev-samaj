import image6 from "../assets/banner2.jpg";

const AboutUs = () => {
  return (
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-thin tracking-tight text-white ">
            VISION and History
          </h2>
          <p className="mt-2 text-pretty text-lg font-thin text-white sm:text-xl/8 ">
            Wesleyan's mission is to be a Christian school of academic
            excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
