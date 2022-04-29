import { useEffect, useState } from "react";
import Photos from "./components/Photos";

function App() {
  const [photos, setPhotos] = useState([]);

  const apiKey = "wHGvrk7tWmqHbJCscFqMnDBHcXqq2D0DVFf5nAq8nGA";
  const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=1`;

  const fetchImg = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
    setPhotos(data);
  };

  useEffect(() => {
    fetchImg();
  }, []);
  return (
    <div className="App">
      <Photos />
    </div>
  );
}

export default App;
