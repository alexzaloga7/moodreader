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
      <h2> What are you aiming for?</h2>
      <div className="mood-options">
        
        <button
          className="mood-button"
          id="focus"
          onClick={() => moodHandler("focus")}
        >
          Focus
        </button>
  
        <button
          className="mood-button"
          id="Relax"
          onClick={() => moodHandler("relax")}
        >
          Relax
        </button>

        <button
          className="mood-button"
          id="energize"
          onClick={() => moodHandler("energize")}
        >
          Energize
        </button>

        <button
          className="mood-button"
          id="balance"
          onClick={() => moodHandler("balance")}
        >
          Balance
        </button>
        
      </div>
    </div>
  );
};

export default MoodGallery;
