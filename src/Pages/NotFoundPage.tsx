import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/FakeSpotify");
  };

  return (
    <div className="notfound">
      <div className="notfound__block">
        <h1 className="notfound__status">404 NOT FOUND</h1>
        <h2 className="notfound__message">This page does not exist</h2>
        <button className="notfound__button" onClick={handleClick}>
          Go main page
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
