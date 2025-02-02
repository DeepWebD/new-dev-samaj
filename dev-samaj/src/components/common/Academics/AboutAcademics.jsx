/* eslint-disable react/prop-types */

const AboutAcademics = ({ aboutAcademicData }) => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <h2 className="text-3xl sm:text-5xl text-secondary ">
        {aboutAcademicData?.title}
      </h2>
      <p className="text-xl sm:text-3xl text-secondary">
        {aboutAcademicData?.subTitle}
      </p>
      <p className="text-xl tracking-wider text-gray-700">
        {aboutAcademicData?.para1}
      </p>
      <p className="text-xl tracking-wider text-gray-700">
        {aboutAcademicData?.para2}
      </p>
    </div>
  );
};

export default AboutAcademics;
