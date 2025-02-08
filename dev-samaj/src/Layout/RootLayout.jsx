import Navigation from "../components/Header/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { showPublicChrome } from "../utility/showChrome";
const RootLayout = () => {
  const pathname = window.location.pathname;
  showPublicChrome(pathname);
  return (
    <>
      {showPublicChrome(pathname) && <Navigation />}
      <Outlet />
      {showPublicChrome(pathname) && <Footer />}
    </>
  );
};

export default RootLayout;
