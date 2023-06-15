import { useParams } from "react-router-dom";

// eslint-disable-next-line
interface MoodGalleryParams {
  name: string;
}

const MoodGallery: React.FC = () => {
  const params = useParams<{ name: string }>();

  return (
    <div className="mood-gallery">
      <h1>Welcome {params.name}</h1>
    </div>
  );
};

export default MoodGallery;
