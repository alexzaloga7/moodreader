import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    navigate("/moodgallery", { state: { event } });
    if (name.value.trim() === "") {
      alert("Please enter your name.");
      return;
    }
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
