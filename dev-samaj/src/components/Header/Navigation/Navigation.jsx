import { useEffect, useState, useRef } from "react";
import Logo from "../../../assets/logo.png";
import navbarData from "../../../mockdata/navbarData";
import Navcard from "../Navcard/Navcard";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import ResponsiveMenu from "../../Navbar/ResponsiveMenu";
import { GrLocation } from "react-icons/gr";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowNavCard,
  selectShowResponsiveNav,
  setShowNavCard,
  setNavConfig,
  setShowResponsiveNav,
  selectCurrentPath,
  selectNavConfig,
  setCurrentPath,
} from "../../../store/reducers/uiSlice";
const Navigation = () => {
  const dispatch = useDispatch();
  const showNavCard = useSelector(selectShowNavCard);
  const showResponsiveNav = useSelector(selectShowResponsiveNav);
  const currentPath = useSelector(selectCurrentPath);
  const navConfig = useSelector(selectNavConfig);
  const navigate = useNavigate();
  const [subNavbarData, setSubNavbarData] = useState([]);
  const navbarCardRef = useRef(null);
  const [location, setLocation] = useState("nehruNagar");
  const [showLocationCard, setShowLocationCard] = useState(false);
  const pathname = window.location.pathname;

  const handleNavHover = (e) => {
    dispatch(setShowNavCard(true));
    navbarData.map((item) => {
      if (item.id === e.target.id) {
        if (item.subNavbar) {
          setSubNavbarData(item.subNavbar);
        }
      }
    });
  };

  /**
   * Handles the scroll event and updates the navbar styles based on the scroll position.
   */
  const handleScroll = () => {
    if (window.scrollY > 50) {
      dispatch(
        setNavConfig({
          navbarBg: "bg-[#0A3981]",
          navHeight: "h-[80px]",
          imgHeight: "h-[80px]",
          imgWidth: "w-16",
          navTetxColor: "text-white",
          shadow: "shadow-b",
        })
      );
    } else if (window.scrollY < 50) {
      dispatch(
        setNavConfig({
          navbarBg: "bg-secondary lg:bg-transparent",
          navHeight: "h-[80px] lg:h-[160px]",
          imgHeight: "h-16 lg:h-28",
          imgWidth: "w-16 lg:w-28",
          navTetxColor: "text-white",
          shadow: "shadow-none",
        })
      );
    }
  };

  // eslint-disable-next-line no-undef
  useEffect(() => {
    if (currentPath === "/" && pathname == "/") {
      if (window.scrollY > 80) {
        dispatch(
          setNavConfig({
            navbarBg: "bg-secondary",
            navHeight: "h-[80px]",
            imgHeight: "h-16",
            imgWidth: "w-16",
            navTetxColor: "text-white",
            shadow: "shadow-b",
          })
        );
      } else {
        dispatch(
          setNavConfig({
            navbarBg: "bg-transparent",
            navHeight: "h-[80px] lg:h-[160px]",
            imgHeight: "h-16 lg:h-28",
            imgWidth: "w-16 lg:w-28",
            navTetxColor: "text-white",
            shadow: "shadow-none",
          })
        );
      }
    } else {
      dispatch(
        setNavConfig({
          navbarBg: "bg-secondary",
          navHeight: "h-[80px]",
          imgHeight: "h-16",
          imgWidth: "w-16",
          navTetxColor: "text-white",
          shadow: "shadow-b",
        })
      );
    }
  }, [currentPath, dispatch, window.scrollY]);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      navbarCardRef.current &&
      !navbarCardRef.current.contains(event.target)
    ) {
      dispatch(setShowNavCard(false));
      setSubNavbarData([]);
    }
  };

  const homeClickHandler = (e) => {
    e.preventDefault();
    dispatch(setCurrentPath("/"));
    navigate("/");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const changeSchool = (e) => {
    e.preventDefault();
    setLocation(e.target.id);
    setShowLocationCard(!showLocationCard);
  };

  const handleNavCardMouseLeave = () => {
    dispatch(setShowNavCard(false));
    setSubNavbarData([]);
  };

  const responseNavHandler = (isOpen) => {
    dispatch(setShowResponsiveNav(isOpen));
  };
  return (
    <>
      <div ref={navbarCardRef} onMouseLeave={handleNavCardMouseLeave}>
        <Navcard showCard={showNavCard} subNavbarData={subNavbarData} />
      </div>

      <nav
        className={`fixed top-0 w-full z-20 transition-colors duration-300 ${navConfig.shadow} ${navConfig.navbarBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between ${navConfig.navHeight}`}
          >
            <div className="flex items-center">
              <div>
                <img
                  className={`${navConfig.imgHeight} ${navConfig.imgWidth} `}
                  src={Logo}
                  alt="Logo"
                />
              </div>
              <div className={`flex flex-col ${navConfig.navTetxColor}`}>
                <div className="text-xl font-bold w-auto">
                  <a href="#" onClick={(e) => homeClickHandler(e)}>
                    DEV SAMAJ SCHOOL
                  </a>
                </div>
                <div className="text-sm font-light flex justify-start items-center gap-2">
                  <GrLocation />
                  <p>Nehru Nagar</p>
                  <a
                    href="#"
                    className="relative flex justify-center items-center text-primary"
                    onClick={() => setShowLocationCard(!showLocationCard)}
                  >
                    <p>Change</p>
                    <span>
                      <MdKeyboardArrowRight
                        style={{ display: showLocationCard ? "block" : "none" }}
                        className="text-lg transition-all duration-500"
                      />
                      <MdKeyboardArrowDown
                        style={{
                          display: !showLocationCard ? "block" : "none",
                        }}
                        className="text-lg transition-all duration-500"
                      />
                    </span>
                    <div
                      onMouseLeave={(e) => setShowLocationCard(false)}
                      onClick={(e) => changeSchool(e)}
                      style={{ display: showLocationCard ? "flex" : "none" }}
                      className="absolute w-44 h-36 bg-white shadow-lg shadow-secondary  top-5 left-5 flex-col justify-center items-center gap-4 text-lg z-40"
                    >
                      <a
                        id="nehruNagar"
                        href="#"
                        className="text-secondary hover:text-primary"
                      >
                        Nehru Nagar
                      </a>
                      <a
                        id="sukhdevNagar"
                        href="#"
                        className="text-secondary hover:text-primary"
                      >
                        Sukhdev Nagar
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navbarData.map((item) => {
                  return (
                    <a
                      key={item.id}
                      href="#"
                      id={item.id}
                      className={`${navConfig.navTetxColor} hover:border-b-[1px] font-bold mx-3 py-2 text-medium `}
                      onMouseEnter={handleNavHover}
                      // onMouseLeave={handleNavCardMouseLeave}
                    >
                      {item.text.toUpperCase()}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  className={`${navConfig.navTetxColor} hover:border-b-[1px] font-bold px-3 py-2 text-medium`}
                >
                  CONTACT
                </a>
                <a
                  href="#"
                  className={`${navConfig.navTetxColor} hover:text-orange-400 py-1 px-10 border rounded-[25px] text-lg font-medium `}
                >
                  Login
                </a>
              </div>
            </div>
            {/* Mobile Hamnurger Menu  */}
            <div className="lg:hidden">
              <MdMenu
                style={{
                  display: showResponsiveNav ? "none" : "block",
                }}
                className="text-4xl text-white"
                onClick={() => responseNavHandler(true)}
              />
              <IoMdClose
                style={{
                  display: showResponsiveNav ? "block" : "none",
                }}
                className="text-4xl text-white"
                onClick={() => responseNavHandler(false)}
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu navbarData={navbarData} />
    </>
  );
};

export default Navigation;
