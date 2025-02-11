import React, { lazy, Suspense } from "react";
import Home from "./Pages/Home";
import RootLayout from "./Layout/RootLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import Admission from "./Pages/Admission";
import ExtraCarriculum from "./Pages/ExtraCarriculum";
import Facilities from "./Pages/Facilities";
import History from "./Pages/History";
import Mpd from "./Pages/Mpd";

import UiContextProvider from "./context/UiContext";
import store from "./store/store";
import { Provider } from "react-redux";
import ImageGallery from "./Pages/ImageGallery";
import Academics from "./Pages/Academics";
import EventPage from "./Pages/Eventpage";
import { VideoGalleryPage } from "./Pages/VideoGallery";
import Houses from "./Pages/Houses/Houses";
import Prayers from "./Pages/Prayers/Prayers";
import AppLayout from "./Layout/AppLayout";
import Dashboard from "./Pages/SchoolManagement/Dashboard";
import Assignment from "./Pages/SchoolManagement/Teacher/Assignment";

// Lazy load the Login component
const Login = lazy(() => import("./Pages/Login/Login"));
const Students = lazy(() => import("./Pages/SchoolManagement/Students"));
const Teachers = lazy(() => import("./Pages/SchoolManagement/Teachers"));
const Admins = lazy(() => import("./Pages/SchoolManagement/Admins"));
const StudentAssignments = lazy(() =>
  import("./Pages/SchoolManagement/Student/StudentAssignments")
);
const StudentResults = lazy(() =>
  import("./Pages/SchoolManagement/Student/StudentResults")
);

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="images" element={<ImageGallery />}></Route>
        <Route path="about-devSamaj" element={<AboutUs />}></Route>
        <Route path="admission" element={<Admission />}></Route>
        <Route path="pre-primary" element={<Academics />}></Route>
        <Route path="lower-school" element={<Academics />}></Route>
        <Route path="middle-school" element={<Academics />}></Route>
        <Route path="high-school" element={<Academics />}></Route>
        <Route path="facilities" element={<Facilities />}></Route>
        <Route path="history" element={<History />}></Route>
        <Route path="mandatory" element={<Mpd />}></Route>
        <Route path="video" element={<VideoGalleryPage />}></Route>
        <Route path="event" element={<EventPage />}></Route>
        <Route path="extra-curricular" element={<ExtraCarriculum />}></Route>
        <Route path="houses" element={<Houses />}></Route>
        <Route path="prayers" element={<Prayers />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="school-management/" element={<AppLayout />}>
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route
            path="students"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Students />
              </Suspense>
            }
          ></Route>
          <Route
            path="teachers"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Teachers />
              </Suspense>
            }
          ></Route>
          <Route
            path="admins"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Admins />
              </Suspense>
            }
          ></Route>
          <Route
            path="assigments"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Assignment />
              </Suspense>
            }
          ></Route>
          <Route
            path="student/assignments"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <StudentAssignments />
              </Suspense>
            }
          ></Route>
          <Route
            path="student/results"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <StudentResults />
              </Suspense>
            }
          ></Route>
        </Route>

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
