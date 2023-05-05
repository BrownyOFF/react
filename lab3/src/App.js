import React, { useEffect, useState } from "react";

import { List } from "react-virtualized";
import "./App.css";
import Picture from "./components/Picture";

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/photos")
      ).json();

      setPhotos(data.filter((photo) => photo.title.split(" ").length <= 7));
    };

    fetchPhotos();
  }, []);

  function rowRenderer({ key, index, style }) {
    return (
      <div key={key} style={style}>
        <img src={photos[index].url} alt="img" />
        <span onClick={() => setCurrentImage(photos[index])}>
          {photos[index].url}
        </span>
      </div>
    );
  }

  return (
    <div>
      <h1>Lab3 virtualized list</h1>
      <List
        className="list-center"
        width={500}
        height={300}
        rowCount={photos.length}
        rowHeight={30}
        rowRenderer={rowRenderer}
      />
      <hr />
      click url
      <Picture title={currentImage.title} url={currentImage.url} />
    </div>
  );
}

export default App;
