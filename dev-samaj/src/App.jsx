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
import AdmissionCriteria from "./Pages/AdmissionCriteria";
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
import store from "./store/store";
import { Provider } from "react-redux";
import ImageGallery from "./Pages/ImageGallery";
import Academics from "./Pages/Academics";
import EventPage from "./Pages/Eventpage";
import { VideoGalleryPage } from "./Pages/VideoGallery";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="images" element={<ImageGallery />}></Route>
        <Route path="about-devSamaj" element={<AboutUs />}></Route>
        <Route path="admission" element={<Admission />}></Route>
        {/* <Route
          path="registration-criteria"
          element={<AdmissionCriteria />}
        ></Route> */}
        <Route path="pre-primary" element={<Academics />}></Route>
        <Route path="lower-school" element={<Academics />}></Route>
        <Route path="middle-school" element={<Academics />}></Route>
        <Route path="high-school" element={<Academics />}></Route>

        {/* <Route path="video-gellery" element={<ExtraCarriculum />}></Route> */}
        <Route path="facilities" element={<Facilities />}></Route>
        <Route path="history" element={<History />}></Route>
        <Route path="mandatory" element={<Mpd />}></Route>
        <Route path="video" element={<VideoGalleryPage />}></Route>
        <Route path="event" element={<EventPage />}></Route>
        {/* <Route path="images" element={<Prayers />}></Route> */}
        {/* <Route path="registration-form" element={<RegistrationForm />}></Route> */}
        {/* <Route path="transportation" element={<Transportation />}></Route> */}
        {/* <Route path="upcomingEvents" element={<UpcomingEvent />}></Route> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <main className="overflow-x-hidden">
      <UiContextProvider>
        <Provider store={store}>
          <RouterProvider store={store} router={router} />
        </Provider>
      </UiContextProvider>
    </main>
  );
};

export default App;
