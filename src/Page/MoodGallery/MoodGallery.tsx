import { useNavigate, useLocation } from "react-router-dom";
import "./MoodGallery.scss";
import Balance from "../../Assets/Images/moodbalance.png";
import Focus from "../../Assets/Images/focus.png";
import Relax from "../../Assets/Images/relax.png";
import Revitalize from "../../Assets/Images/revitalize.png";
import Equilibrium from "../../Assets/Images/balance.png";

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
      <div className="headercontainer">
        <h1 className="mood-header">Welcome {name}</h1>
        <img src={Balance} alt="balance" className="main-image"></img>
      </div>
      <h2 className="mood-subheader"> What do you want to achieve?</h2>
      <div className="mood-options">
        <button
          className="mood-button"
          id="focus"
          onClick={() => moodHandler("focus")}
        >
          Focus<img src={Focus} alt="focus" className="icon"></img>
          <p className="mood-description">
            Channel your energy towards a singular task or objective.
          </p>
        </button>

        <button
          className="mood-button"
          id="relax"
          onClick={() => moodHandler("relax")}
        >
          Relax <img src={Relax} alt="relax" className="icon"></img>
          <p className="mood-description">
            Practice deep breathing to release tension and promote relaxation.
          </p>
        </button>

        <button
          className="mood-button"
          id="energize"
          onClick={() => moodHandler("energize")}
        >
          Energize{" "}
          <img src={Revitalize} alt="revitalize" className="icon"></img>
          <p className="mood-description">
            Replenish vitality and regain vigor.
          </p>
        </button>

        <button
          className="mood-button"
          id="balance"
          onClick={() => moodHandler("balance")}
        >
          Balance <img src={Equilibrium} alt="balance" className="icon"></img>
          <p className="mood-description">
            Restore equilibrium and regain a sense of stability.
          </p>
        </button>
      </div>
    </div>
  );
};

export default MoodGallery;
