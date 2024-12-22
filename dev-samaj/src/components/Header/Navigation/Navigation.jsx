import React, { useEffect, useState, useRef } from "react";
import Logo from "../../../assets/logo.png";
import navbarData from "../../../mockdata/navbarData";
import Navcard from "../Navcard/Navcard";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import ResponsiveMenu from "../../Navbar/ResponsiveMenu";
import { GrLocation } from "react-icons/gr";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const Navigation = () => {
  const [navbarBg, setNavbarBg] = useState("bg-secondary lg:bg-transparent");
  const [navHeight, setNavHeight] = useState("h-[80px] lg:h-[160px]");
  const [imgHeight, setImgHeight] = useState("h-16 lg:h-28");
  const [imgWidth, setImgWidth] = useState("w-16 lg:w-28");
  const [navTetxColor, setNavTextColor] = useState("text-white");
  const [subNavbarData, setSubNavbarData] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [shadow, setShadow] = useState("shadow-none");
  const navbarCardRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('nehruNagar');
  const [showLocationCard, setShowLocationCard] = useState(false);
  /**
   * Handles the hover event on the navigation items.
   * Sets the showCard state to true and updates the subNavbarData state if applicable.
   *
   * @param {Event} e - The event object representing the hover event.
   */
  const handleNavHover = (e) => {
    setShowCard(true);
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
      setNavbarBg("bg-[#0A3981]");
      setNavHeight("h-[80px]");
      setImgHeight("h-16");
      setImgWidth("w-16");
      setNavTextColor("text-white");
      setShadow("shadow-b");
    } else {
      setNavbarBg("bg-secondary lg:bg-transparent");
      setNavHeight("h-[80px] lg:h-[160px]");
      setImgHeight("h-16 lg:h-28");
      setImgWidth("w-16 lg:w-28");
      setNavTextColor("text-white");
      setShadow("shadow-none");
    }
  };

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
      setShowCard(false);
      setSubNavbarData([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const changeSchool = (e) => {
    console.log(e.target.id);
    e.preventDefault();
    
    setLocation(e.target.id);
    setShowLocationCard(!showLocationCard);
  };


  return (
    <>
      <div ref={navbarCardRef}>
        <Navcard showCard={showCard} subNavbarData={subNavbarData} />
      </div>

      <nav
        className={`fixed top-0 w-full z-20 transition-colors duration-300 ${shadow} ${navbarBg}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between ${navHeight}`}>
            <div className="flex items-center">
              <div>
                <img
                  className={`${imgHeight} ${imgWidth} transition-all duration-300 `}
                  src={Logo}
                  alt="Logo"
                />
              </div>
              <div className={`flex flex-col ${navTetxColor}`}>
                <div className="text-xl font-bold">DEV SAMAJ SCHOOL</div>
                <div className="text-sm font-light flex justify-start items-center gap-2">
                  <GrLocation />
                  <p>Nehru Nagar</p>
                  <a
                    href="#"
                    className="relative flex justify-center items-center text-primary"
                    onClick={()=>setShowLocationCard(!showLocationCard)}
                  >
                    <p>Change</p>
                    <span>
                      <MdKeyboardArrowRight style={{display:showLocationCard?'block':'none'}} className="text-lg transition-all duration-500" />
                      <MdKeyboardArrowDown  style={{display:!showLocationCard?'block':'none'}} className="text-lg transition-all duration-500"/>
                    </span>
                    <div onClick={(e) => changeSchool(e)} style={{display:showLocationCard?'flex':'none'}} className="absolute w-44 h-36 bg-white shadow-lg shadow-secondary  top-5 left-5 flex-col justify-center items-center gap-4 text-lg">
                      <a id="nehruNagar" href="#" className="text-secondary hover:text-primary">Nehru Nagar</a>
                      <a id="sukhdevNagar" href="#" className="text-secondary hover:text-primary">Sukhdev Nagar</a>
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
                      className={`${navTetxColor} hover:text-orange-400 px-3 py-2 rounded-md text-lg font-medium `}
                      onMouseEnter={handleNavHover}
                    >
                      {item.text}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  className={`${navTetxColor} hover:text-orange-400 px-3 py-2 rounded-md text-lg font-medium `}
                >
                  Contact
                </a>
                <a
                  href="#"
                  className={`${navTetxColor} hover:text-orange-400 py-1 px-10 border rounded-[25px] text-lg font-medium `}
                >
                  Login
                </a>
              </div>
            </div>
            {/* Mobile Hamnurger Menu  */}
            <div className="lg:hidden">
              <MdMenu
                style={{ display: isOpen ? "none" : "block" }}
                className="text-4xl text-white"
                onClick={() => setIsOpen(!isOpen)}
              />
              <IoMdClose
                style={{ display: isOpen ? "block" : "none" }}
                className="text-4xl text-white"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu navbarData={navbarData} isOpen={isOpen} />
    </>
  );
};

export default Navigation;
