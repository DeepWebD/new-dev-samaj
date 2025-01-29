import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NavcardContent from "./NavcardContent/NavcardContent";

const Navcard = (props) => {
  const [activeTab, setActiveTab] = useState("");
  const [cardPosition, setCardPosition] = useState("top-28");
  const { showCard, subNavbarData } = props;

  const tabClickHandler = (e) => {
    if (e.target.id) {
      setActiveTab(e.target.id);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setCardPosition("top-20");
    } else {
      setCardPosition("top-28");
    }
  };

  useEffect(() => {
    if (subNavbarData?.length > 0) {
      setActiveTab(subNavbarData[0].id);
    }
  }, [subNavbarData]);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const listItem = subNavbarData?.map((item) => {
    return (
      <div
        key={item.id}
        id={item.id}
        className={activeTab === item.id ? "text-secondary font-bold" : ""}
      >
        {item.text}
      </div>
    );
  });

  const cardContent = subNavbarData?.map((item) => {
    return (
      <div
        key={item.id}
        style={{ display: activeTab == item.id ? "block" : "none" }}
      >
        <NavcardContent
          id={item.id}
          title={item.text}
          desc={item.desc}
          images={[item.image]}
        />
      </div>
    );
  });

  return (
    <div style={{ display: showCard ? "block" : "none" }}>
      <div
        className={`hidden lg:block fixed z-20 w-[800px] h-[300px] border bottom-2 text-secondary bg-white shadow-lg ${cardPosition}  transition-all duration-500 right-[10%]`}
      >
        <div className="flex flex-row justify-center items-center h-[100%] w-[100%]">
          <div
            className="flex flex-col justify-center gap-2  px-5 text-black w-[200px]  h-[100%] border-r-2 border-secondary;"
            onClick={(e) => tabClickHandler(e)}
          >
            {listItem}
          </div>
          <div>{cardContent}</div>
        </div>
      </div>
    </div>
  );
};

Navcard.propTypes = {
  showCard: PropTypes.bool.isRequired,
  subNavbarData: PropTypes.array.isRequired,
};

export default Navcard;
