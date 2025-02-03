/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { setCurrentPath } from "../../store/reducers/uiSlice";
import { useNavigate } from "react-router-dom";
const Subnav = ({ subNavbarData }) => {
  const dispatch = useDispatch();

  const pathname = window.location.pathname;
  const navId = pathname.slice(1, pathname.length);
  const navigate = useNavigate();

  const handleRedirect = (e, id) => {
    e.preventDefault();
    // dispatch(setShowNavCard(false));
    dispatch(setCurrentPath("/" + id));
    navigate("/" + id);
  };
  return (
    <nav className="flex justify-center items-center py-4 border-b-[1px]  ">
      <ul className="flex justify-center items-center gap-8">
        {subNavbarData.map((navItem) => {
          return (
            <li
              key={navItem.id}
              className="cursor-pointer hover:text-primary"
              style={{
                fontWeight: navId == navItem.id ? "bold" : "",
                color: navId == navItem.id ? "Orange" : "",
              }}
              onClick={(e) => handleRedirect(e, navItem.id)}
            >
              {navItem.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Subnav;
