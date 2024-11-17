import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [imageList, setImageList] = useState([]);

  const handleSubmit = async (term) => {
    try {
      //asynchronous call to searchImages function with the input value
      const result = await searchImages(term);
      // updates the state with the list of images
      setImageList(result);
    } catch (error) {
      // logs the error message if the images are not fetched
      console.error("error fetching images", error);
    }
  };

  return (
    <div>
      {/* passes funtion as props to be called from the child component */}
      <SearchBar handleSubmit={handleSubmit} />
      {/* passes list of images as props */}
      <ImageList images={imageList} />
    </div>
  );
}

export default App;
