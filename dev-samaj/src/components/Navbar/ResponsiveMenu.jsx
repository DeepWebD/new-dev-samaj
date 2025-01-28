import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  selectShowResponsiveNav,
  setShowResponsiveNav,
} from "../../store/reducers/uiSlice";

const ResponsiveMenu = (props) => {
  const dispatch = useDispatch();
  const showResponsiveNav = useSelector(selectShowResponsiveNav);

  const { navbarData } = props;

  const [activeNaveLink, setActiveNavLink] = useState("");
  const navigate = useNavigate();

  const handleLinkClick = (e, id) => {
    e.stopPropagation();

    setActiveNavLink(id);
  };

  const handleNavigate = (e, id) => {
    e.preventDefault();
    dispatch(setShowResponsiveNav(false));
    navigate("/" + id);
  };
  return (
    <AnimatePresence mode="wait">
      {showResponsiveNav && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 w-full z-20 lg:hidden"
        >
          <div className=" bg-secondary h-screen text-white py-5  ">
            <ul className="flex flex-col justify-center items-center gap-10 ">
              {navbarData?.map((item) => {
                return (
                  <li
                    key={item.id}
                    id={item.id}
                    className="text-xl font-bold w-full flex flex-col justify-center items-center pb-4 border-b-[1px] border-slate-400"
                    onClick={(e) => handleLinkClick(e, item.id)}
                  >
                    <a href="#">{item.text}</a>
                    <ul
                      style={{
                        display: activeNaveLink == item.id ? "block" : "none",
                      }}
                      className="flex text-lg font-medium w-full text-slate-400 flex-col gap-1"
                    >
                      {item.subNavbar?.map((subItem) => {
                        return (
                          <li
                            key={subItem.id}
                            className="w-full flex justify-center hover:text-white"
                          >
                            <a
                              onClick={(e) => handleNavigate(e, subItem.id)}
                              href="#"
                            >
                              {subItem.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}

              <li className=" w-full flex justify-center items-center">
                Login
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ResponsiveMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  navbarData: PropTypes.array.isRequired,
};

export default ResponsiveMenu;
