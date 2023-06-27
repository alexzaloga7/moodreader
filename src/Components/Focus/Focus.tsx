import "./Focus.scss";
import { useState } from "react";

import moods from "../../Data/moods.json";
import FocusImage from "../../Assets/Images/focussummary.svg";
import Timer from "../Timer/Timer";
// import MusicPlayerFrame from "../../Assets/Images/Untitled design (26).svg";

const Focus: React.FC = () => {
  const [showText, setShowText] = useState(true);

  const toggleTextVisibility = () => {
    setShowText((prevShowText) => !prevShowText);
  };
  return (
    <section className="focus">
      <div className="focus-header__container">
        <h2 className="focus-header">{moods[0]?.mood}</h2>
      </div>
      <div className="focus-image__container">
        <img src={FocusImage} alt="Focus Meditation" className="focus-image" />
      </div>
      <Timer />

      {/* <img
        src={MusicPlayerFrame}
        alt="Focus Meditation Image"
        className="focus-imageplayer"
      /> */}
      <div className="focus-musicplayer__border"></div>
      <div className="focus-musicplayer">
        <iframe
          className="focus-musicplayer__iframe"
          title="focus-music"
          id="soundCloudPlayer"
          width="20%"
          height="90"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1367255443&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
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

      <div className="focus-text__container">
        <button className="focus-text__button" onClick={toggleTextVisibility}>
          {showText ? "Hide Text" : "Show Text"}

          {showText && <p className="focus-text">{moods[0]?.meditation}</p>}
        </button>
      </div>
    </section>
  );
};

export default Focus;
