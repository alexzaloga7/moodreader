import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;

    if (name.value.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    navigate(`/moodgallery/${name.value}`);
  }

  return (
    <div className="landing">
      <h1 className="landing-header">Mood Generator</h1>
      <h2 className="landing-subheader">Enter your name to begin.</h2>
      <div className="landing-textbox">
        <form className="landing-form" onSubmit={handleFormSubmit}>
          <input className="landing-input" type="text" name="name" />
          <button className="landing-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
