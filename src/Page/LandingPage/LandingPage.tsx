import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import TitleImage from "../../Assets/Images/mood-reader-image.gif";
import TeaLeaves from "../../Assets/Images/tealeaves.jpg";

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameInput = nameRef.current;

    if (nameInput && nameInput.value.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    navigate("/moodgallery", { state: { name: nameInput?.value } });
  }

  return (
    <div className="landing">
      <img src={TeaLeaves} alt="teacup" className="landing-image"></img>
      <h1 className="landing-header">Mood Reader</h1>
      <h2 className="landing-subheader">Enter your name to begin.</h2>
      <div className="landing-textbox">
        <form className="landing-form" onSubmit={handleFormSubmit}>
          <input className="landing-input" type="text" ref={nameRef} />
          <button className="landing-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
