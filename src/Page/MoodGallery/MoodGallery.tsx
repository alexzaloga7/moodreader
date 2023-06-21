import { useNavigate, useLocation } from "react-router-dom";
import "./MoodGallery.scss";

// eslint-disable-next-line
interface MoodGalleryName {
  name: string;
}

const MoodGallery: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let name = location.state && location.state.name;

  function moodHandler(mood: string) {
    navigate("/moodsummary", { state: { mood } });
  }
  return (
    <div className="mood-gallery">
      <h1>Welcome {name}</h1>
      <h2> What's your mood today?</h2>
      <div className="mood-options">
        <button
          className="mood-button"
          id="happy"
          onClick={() => moodHandler("happy")}
        >
          Happy
        </button>
        <button
          className="mood-button"
          id="forest"
          onClick={() => moodHandler("forest")}
        >
          Forest
        </button>
        <button
          className="mood-button"
          id="calm"
          onClick={() => moodHandler("calm")}
        >
          Calm
        </button>
        <button
          className="mood-button"
          id="groundness"
          onClick={() => moodHandler("groundness")}
        >
          Groundness
        </button>
        <button
          className="mood-button"
          id="joy"
          onClick={() => moodHandler("joy")}
        >
          Joy
        </button>
        <button
          className="mood-button"
          id="renewal"
          onClick={() => moodHandler("renewal")}
        >
          Renewal
        </button>
        <button
          className="mood-button"
          id="gratitude"
          onClick={() => moodHandler("gratitude")}
        >
          Gratitude
        </button>
        <button
          className="mood-button"
          id="balance"
          onClick={() => moodHandler("balance")}
        >
          Balance
        </button>
        <button
          className="mood-button"
          id="awareness"
          onClick={() => moodHandler("awareness")}
        >
          Awareness
        </button>
        <button
          className="mood-button"
          id="zen"
          onClick={() => moodHandler("zen")}
        >
          Zen
        </button>
      </div>
    </div>
  );
};

export default MoodGallery;
