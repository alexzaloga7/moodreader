import { useNavigate, useLocation } from "react-router-dom";

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
        <button id="happy" onClick={() => moodHandler("happy")}>
          Happy
        </button>
        <button id="clarity" onClick={() => moodHandler("clarity")}>
          Clarity
        </button>
        <button id="calm" onClick={() => moodHandler("calm")}>
          Calm
        </button>
        <button id="groundness" onClick={() => moodHandler("groundness")}>
          Groundness
        </button>
        <button id="joy" onClick={() => moodHandler("joy")}>
          Joy
        </button>
        <button id="renewal" onClick={() => moodHandler("renewal")}>
          Renewal
        </button>
        <button id="gratitude" onClick={() => moodHandler("gratitude")}>
          Gratitude
        </button>
        <button id="balance" onClick={() => moodHandler("balance")}>
          Balance
        </button>
        <button id="awareness" onClick={() => moodHandler("awareness")}>
          Awareness
        </button>
      </div>
    </div>
  );
};

export default MoodGallery;
