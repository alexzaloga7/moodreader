import "../LandingPage/LandingPage.scss";
import {useNavigate} from "react-router-dom";



const LandingPage: React.FC = () => {


  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1>Welcome to Mood Reader! Made by Alex & Tara</h1>
      <form onSubmit={PageChange}>
        <input
        type="text"
        placeholder="Enter your name"
        name="name"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  function PageChange(event: React.FormEvent){
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    navigate(`/moodgallery?name=${name.value}`);
  
  };
};

export default LandingPage;
