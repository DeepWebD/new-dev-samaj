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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="images" element={<Image />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  );
  return (
    <main className="overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
