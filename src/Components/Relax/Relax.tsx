import "./Relax.scss";
import { useState } from "react";
import moods from "../../Data/moods.json";
import RelaxImage from "../../Assets/Images/relaxsummary.svg";
import Timer from "../Timer/Timer";
// import MusicPlayerFrame from "../../Assets/Images/Untitled design (26).svg";

const Relax: React.FC = () => {
  const [showText, setShowText] = useState(true);

  const toggleTextVisibility = () => {
    setShowText((prevShowText) => !prevShowText);
  };
  return (
    <section className="relax">
      <div className="relax-header__container">
        <h2 className="relax-header">{moods[1]?.mood}</h2>
      </div>
      <div className="relax-image__container">
        <img src={RelaxImage} alt="Relax Meditation" className="relax-image" />
      </div>
      <Timer />

      {/* <img
        src={MusicPlayerFrame}
        alt="Focus Meditation Image"
        className="focus-imageplayer"
      /> */}
      <div className="relax-musicplayer__border"></div>
      <div className="relax-musicplayer">
        <iframe
          className="relax-musicplayer__iframe"
          title="relax-music"
          id="soundCloudPlayer"
          width="20%"
          height="90"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/181443158&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
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
              "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
            fontWeight: 100,
            display: "none", // Add this line to hide the div
          }}
        ></div>
      </div>

      <div className="relax-text__container">
        <button className="relax-text__button" onClick={toggleTextVisibility}>
          {showText ? "Hide Text" : "Show Text"}

          {showText && <p className="relax-text">{moods[1]?.meditation}</p>}
        </button>
      </div>
    </section>
  );
};

export default Relax;
