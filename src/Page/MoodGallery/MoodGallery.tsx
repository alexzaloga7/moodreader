import "../MoodGallery/MoodGallery.scss";
import {useState} from 'react';
import {useParams} from "react-router-dom";

const MoodGallery: React.FC = () => {

  const params = useParams<{name: string }>();
  const name=params.name;
  const [userName]=useState(name);


  

  return (
    <div className="mood-gallery">
      <h1>Welcome {userName}</h1>
    </div>
  );
};

export default MoodGallery;
