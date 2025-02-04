import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setShowNavCard,
  setCurrentPath,
} from "../../../../store/reducers/uiSlice";
import criteriaPDF from "../../../../assets/pdf/criteria.pdf";
import registrationForm from "../../../../assets/pdf/registrationForm.pdf";

const NavcardContent = (props) => {
  const dispatch = useDispatch();
  const { id, title, desc, images } = props;
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  const handleRedirect = (e, id) => {
    e.preventDefault();
    dispatch(setShowNavCard(false));
    dispatch(setCurrentPath("/" + id));
    navigate("/" + id);
  };

  const downloadPDF = (e, id) => {
    e.preventDefault();
    let pdfUrl = "";
    if (id == "registration-form") {
      pdfUrl = registrationForm;
    } else {
      pdfUrl = criteriaPDF;
    }

    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="flex flex-row px-5 py-2 w-[600px] text-black justify-between h-300">
      <div className="flex flex-col gap-2">
        <div>
          <h4 className="text-2xl text-secondary font-bold">{title}</h4>
        </div>
        <div className=" mt-5 mr-5 pt-0 text-lg font-light">{desc}</div>
        <div>
          {id == "registration-criteria" || id == "registration-form" ? (
            <button onClick={(e) => downloadPDF(e, id)} className="primary-btn">
              Download
            </button>
          ) : (
            <button
              onClick={(e) => handleRedirect(e, id)}
              className="primary-btn"
            >
              Learn More
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center">
        {images.map((image, index) => {
          return (
            <img
              className="h-[100%] w-[300px] object-cover"
              src={image}
              key={index}
              alt="img"
            />
          );
        })}
      </div>
    </div>
  );
};

NavcardContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

export default NavcardContent;
