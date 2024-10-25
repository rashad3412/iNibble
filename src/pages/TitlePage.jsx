import React from "react";
import logo from "../../public/assets/logo.png";
import { useNavigate } from "react-router-dom";

function TitlePage() {
  const navigate = useNavigate();

  const handleTransition = () => {
    navigate("/homepage");
  };

  return (
    <>
      <div className="container">
        <div id="logo-overlay">
          <img id="title-logo" src={logo} alt="iNibble Logo" />
        </div>
        <div id="title-text">
          <h1>
            i<span>N</span>ibble
          </h1>
        </div>

        <p id="title-quote">
          {" "}
          A small Nibble can cause Sribbles <span>...</span>
        </p>
        <p id="nibble-quote">
          Do you Nibble <span>?</span>
        </p>
        {/* Button to navigate to HomePage */}
        <button id="title-page-button" onClick={handleTransition}>
          Go
        </button>
      </div>
    </>
  );
}

export default TitlePage;
