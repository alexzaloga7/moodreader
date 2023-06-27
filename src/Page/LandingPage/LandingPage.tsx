import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import Title from "../../Assets/Images/Mindful Mood.png";

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
      <img  src={Title}alt="teacup" className="landing-image"></img>
      {/* <h1 className="landing-header">Mood Reader</h1> */}
      <h2 className="landing-subheader">Enter your name to get started.</h2>
      <div className="landing-textbox">
        <form className="landing-form" onSubmit={handleFormSubmit}>
          <input className="landing-input" type="text" ref={nameRef} />
          <button className="landing-button" type="submit">
            Begin
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
