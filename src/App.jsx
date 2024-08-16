import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
// import LoadMore from "./components/LoadMore/LoadMore";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import ImageModal from "./components/ImageModal/ImageModal"
import ImageCard from "./components/ImageCard/ImageCard"

function App() {
      const [photos, setPhotos] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/?client_id=CfF87_GktDHKGZeUATCI9G7_4LMIAJu0I3IwAahnDfk")
      .then(({ data }) => {
        setPhotos(data);
      });
  }, []);


  return <div>
        <SearchBar />
    {/* {photos.map(photo => {
      return <div key={photo.id}>
        <h3>{photo.title}</h3>
      </div>
        })}  */}
  </div>

}

export default App; 