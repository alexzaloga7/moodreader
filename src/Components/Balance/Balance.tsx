import "./Balance.scss";
import { useState } from "react";
import moods from "../../Data/moods.json";
import BalanceImage from "../../Assets/Images/balancesummary.svg";
import Timer from "../Timer/Timer";
// import MusicPlayerFrame from "../../Assets/Images/Untitled design (26).svg";

const Balance: React.FC = () => {
  const [showText, setShowText] = useState(true);

  const toggleTextVisibility = () => {
    setShowText((prevShowText) => !prevShowText);
  };
  return (
    <section className="balance">
      <div className="balance-header__container">
        <h2 className="balance-header">{moods[3]?.mood}</h2>
      </div>
      <div className="balance-image__container">
        <img
          src={BalanceImage}
          alt="Balance Meditation"
          className="balance-image"
        />
      </div>
      <Timer />

      {/* <img
        src={MusicPlayerFrame}
        alt="Focus Meditation Image"
        className="focus-imageplayer"
      /> */}
      <div className="balance-musicplayer__border"></div>
      <div className="balance-musicplayer">
        <iframe
          className="balance-musicplayer__iframe"
          title="balance-music"
          id="soundCloudPlayer"
          width="20%"
          height="90"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/911477443&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true
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

      <div className="balance-text__container">
        <button className="balance-text__button" onClick={toggleTextVisibility}>
          {showText ? "Hide Text" : "Show Text"}

          {showText && <p className="balance-text">{moods[3]?.meditation}</p>}
        </button>
      </div>
    </section>
  );
};

export default Balance;
