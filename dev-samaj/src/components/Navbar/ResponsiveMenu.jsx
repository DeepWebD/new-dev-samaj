import React,{ useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ResponsiveMenu = (props) => {
  const { isOpen, navbarData } = props;
  const [activeNaveLink, setActiveNavLink] = useState('');

  const handleLinkClick = (e,id) => {
    e.stopPropagation();
    console.log(id);
    setActiveNavLink(id);
  }
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
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
                    onClick={(e) => handleLinkClick(e,item.id)}
                  >
                    <a href="#">{item.text}</a>
                    <ul style={{display:activeNaveLink==item.id?'block':'none'}} className="flex text-lg font-medium w-full text-slate-400 flex-col gap-1">
                      {item.subNavbar?.map((subItem) => {
                        return (
                          <li key={subItem.id} className="w-full flex justify-center hover:text-white">
                            <a href="#">{subItem.text}</a>
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
