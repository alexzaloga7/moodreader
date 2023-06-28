import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Focus from "../../Components/Focus/Focus";
import Relax from "../../Components/Relax/Relax";
import Energize from "../../Components/Energize/Energize";
import Balance from "../../Components/Balance/Balance";

const MoodSummary: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mood = location.state && location.state.mood;

  if (!mood) {
    navigate("/"); // Redirect to the MoodGallery page if no mood is available
    return null;
  }

  if (mood === "focus") {
    return <Focus />;
  }

  if (mood === "relax") {
    return <Relax />;
  }

  if (mood === "energize") {
    return <Energize />;
  }

  if (mood === "balance") {
    return <Balance />;
  }

  if (mood === "forest") {
    return <div></div>;
  }

  return (
    <div className="mood-summary">
      <p>Your selected mood: {mood}</p>
    </div>
  );
};

export default MoodSummary;
///explanation for why we're not using useState and instead leveraging the useLocation React hook
//In the previous approach using React Router's route state, the state is still being set and passed between components, but it is managed by React Router itself rather than using local component state.
// In the code snippet I provided, when the moodHandler function is called, the selected mood is passed as route state using navigate("/moodsummary", { state: { mood } }). This sets the state for the /moodsummary route.
// In the MoodSummary component, the route state is accessed using the useLocation hook from React Router: const location = useLocation();. The location.state object contains the state passed from the previous page.
// By accessing location.state.mood, we can retrieve the selected mood value from the route state and use it within the MoodSummary component.
// So, even though we're not explicitly using local component state with useState, we're still leveraging React Router's route state to pass and retrieve the selected mood between pages. React Router handles the management of this state for us.
