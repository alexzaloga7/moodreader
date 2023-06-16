import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";

// eslint-disable-next-line
interface MoodGalleryParams {
  name: string;
}

const MoodGallery: React.FC = () => {
  const params = useParams<{ name: string }>();
  const navigate = useNavigate();


  function moodHandler (mood:string){
    navigate('/moodsummary', {state: {mood}});
   
  }
  return (
    <div className="mood-gallery">
      <h1>Welcome {params.name}</h1>
      <h2> What's your mood today?</h2>
      <div className="mood-options">
        <button id="happy" onClick={()=>moodHandler("happy")}>Happy</button>
        <button id="joyful" onClick={ ()=>moodHandler("joyful")}>Joyful</button>
        <button id="sad" onClick={()=>moodHandler("sad")}>Sad</button>
        <button id="angry" onClick={()=>moodHandler("angry")}>Angry</button>
        <button id="anxious" onClick={()=>moodHandler("anxious")}>Anxious</button>
        <button id="scared" onClick={()=>moodHandler("scared")}>Scared</button>
        <button id="exhausted" onClick={()=>moodHandler("exhausted")}>Exhausted</button>
        <button id="curious" onClick={()=>moodHandler("curious")}>Curious</button>
        <button id="calm" onClick={()=>moodHandler("calm")}>Calm</button>
        
      </div>
    </div>
  );
};

export default MoodGallery;
