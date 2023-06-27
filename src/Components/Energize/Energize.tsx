import "./Energize.scss";
import { useState } from "react";
import moods from "../../Data/moods.json";
import EnergizeImage from "../../Assets/Images/energize.svg";
import Timer from "../Timer/Timer";
// import MusicPlayerFrame from "../../Assets/Images/Untitled design (26).svg";

const Energize: React.FC = () => {
  const [showText, setShowText] = useState(true);

  const toggleTextVisibility = () => {
    setShowText((prevShowText) => !prevShowText);
  };
  return (
    <section className="energize">
      <div className="energize-header__container">
        <h2 className="energize-header">{moods[2]?.mood}</h2>
      </div>
      <div className="energize-image__container">
        <img
          src={EnergizeImage}
          alt="Energize Meditation"
          className="energize-image"
        />
      </div>
      <Timer />

      {/* <img
        src={MusicPlayerFrame}
        alt="Focus Meditation Image"
        className="focus-imageplayer"
      /> */}
      <div className="energize-musicplayer__border"></div>
      <div className="energize-musicplayer">
        <iframe
          className="energize-musicplayer__iframe"
          title="energize-music"
          id="soundCloudPlayer"
          width="20%"
          height="90"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/911498905&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true
          "
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

      <div className="energize-text__container">
        <button
          className="energize-text__button"
          onClick={toggleTextVisibility}
        >
          {showText ? "Hide Text" : "Show Text"}

          {showText && <p className="energize-text">{moods[2]?.meditation}</p>}
        </button>
      </div>
    </section>
  );
};

export default Energize;
