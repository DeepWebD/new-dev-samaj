import BackgroundVideo from "../components/common/BackgroundVideo";
import Subnav from "../components/common/Subnav";
import AboutAcademics from "../components/common/Academics/AboutAcademics";
import AcademicSlider from "../components/common/Academics/AcademicSlider";
import TeacherSlider from "../components/common/Academics/TeacherSlider";
import Faq from "../components/common/Academics/Faq";
// import {
//   teacherSliderData,
//   pillers,
//   faqs,
//   subNavbarData,
//   aboutAcademicData,
//   backgroundVideoData,
// } from "../mockdata/academic";
import { useSelector } from "react-redux";
import { selectAcadmics } from "../store/reducers/academiSlice";

const Academics = () => {
  const pathName = window.location.pathname;
  let schoolData;
  let acadmicdata = useSelector(selectAcadmics);

  if (pathName === "/pre-primary") {
    schoolData = acadmicdata["pre-primary"];
  } else if (pathName === "/lower-school") {
    schoolData = acadmicdata["lower-school"];
  } else if (pathName === "/middle-school") {
    schoolData = acadmicdata["middle-school"];
  } else {
    schoolData = acadmicdata["high-school"];
  }

  return (
    <>
      <div className="mt-[80px]">
        <BackgroundVideo
          videoSrc={schoolData?.backgroundVideoData.videoSrcUrl}
        />
        <div className="container my-16">
          <div className="hidden sm:block">
            <Subnav subNavbarData={schoolData?.subNavbarData} />
          </div>
          <div className="my-16">
            <AboutAcademics aboutAcademicData={schoolData?.aboutAcademicData} />
          </div>
          <div className="my-16">
            <h2 className="text-3xl text-secondary mb-4">
              <span className="border-b-0 hover:border-b-2 hover:border-primary">
                Our Five Pillars
              </span>
            </h2>
            <p className="text-xl tracking-wider text-gray-700 mb-4">
              Our mission is to develop leaders of character across five
              pillars: spiritual, academic, physical, social and artistic.
            </p>
            <AcademicSlider slides={schoolData?.pillers} />
          </div>
        </div>
      </div>
      <div className="my-16">
        <TeacherSlider sliderData={schoolData?.teacherSliderData} />
      </div>
      <div className="my-16">
        <Faq faqs={schoolData?.faqs} />
      </div>
    </>
  );
};

export default Academics;
