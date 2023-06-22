import "./Focus.scss";
import moods from "../../Data/moods.json";

const Focus: React.FC = () => {
  return (
    <section>
      <div>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={moods[0].song}
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
            title="brunomars"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            brunomars
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/brunomars/talking-to-the-moon-1"
            title="Bruno Mars - Talking to the Moon"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Bruno Mars - Talking to the Moon
          </a>
        </div>
      </div>
      <p>{moods[0].environment}</p>
      </section>
  );
};

export default Focus;