import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 | Page Not Found </h1>
      <bt />
      <button onClick={() => navigate("/")}>Goto Home</button>
    </div>
  );
};

export default NotFound;
