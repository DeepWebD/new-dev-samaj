import Home from "./Pages/Home";
import RootLayout from "./Layout/RootLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Image from "./Pages/Image";
import NotFound from "./Pages/NotFound";
import VideoGallery from "./Pages/VideoGallery";
import AboutUs from "./Pages/AboutUs";
import Admission from "./Pages/Admission";
import AdmissionCriteria from "./Pages/Admission";
import Courses from "./Pages/Courses";
import ExtraCarriculum from "./Pages/ExtraCarriculum";
import Facilities from "./Pages/Facilities";
import History from "./Pages/History";
import Mpd from "./Pages/Mpd";
import PastEvents from "./Pages/PastEvents";
import Prayers from "./Pages/Prayers";
import RegistrationForm from "./Pages/RegistrationForm";
import Transportation from "./Pages/Transportation";
import UpcomingEvent from "./Pages/UpcomingEvent";
import UiContextProvider from "./context/UiContext";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="images" element={<Image />}></Route>
        <Route path="about-devSamaj" element={<AboutUs />}></Route>
        <Route path="admission" element={<Admission />}></Route>
        <Route path="criteria" element={<AdmissionCriteria />}></Route>
        {/* <Route path="images" element={<Courses />}></Route> */}
        {/* <Route path="video-gellery" element={<ExtraCarriculum />}></Route> */}
        <Route path="facilities" element={<Facilities />}></Route>
        <Route path="history" element={<History />}></Route>
        <Route path="mandatory" element={<Mpd />}></Route>
        <Route path="video" element={<VideoGallery />}></Route>
        <Route path="pastEvents" element={<PastEvents />}></Route>
        {/* <Route path="images" element={<Prayers />}></Route> */}
        <Route path="registration" element={<RegistrationForm />}></Route>
        <Route path="transportation" element={<Transportation />}></Route>
        <Route path="upcomingEvents" element={<UpcomingEvent />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <main className="overflow-x-hidden">
      <UiContextProvider>
        <RouterProvider router={router} />
      </UiContextProvider>
    </main>
  );
};

export default App;
