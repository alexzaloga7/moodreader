import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Focus from "../../Components/Focus/Focus";

const MoodSummary: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mood = location.state && location.state.mood;

  if (!mood) {
    navigate("/"); // Redirect to the MoodGallery page if no mood is available
    return null;
  }
  
  if (mood === "focus") {
    return (
      <Focus/>
    );
  }

  if (mood === "forest") {
    return (
      <div>
        <iframe
          title="Clarity Mood"
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1524168028&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/brunomars"
            title="forest"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            forest
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/brunomars/talking-to-the-moon-1"
            title="Bruno Mars - Talking to the Moon"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Forest
          </a>
        </div>
      </div>
    );
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
