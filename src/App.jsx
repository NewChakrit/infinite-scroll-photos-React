import { useEffect, useState } from "react";
import Photos from "./components/Photos";

function App() {
  const apiKey = "wHGvrk7tWmqHbJCscFqMnDBHcXqq2D0DVFf5nAq8nGA";
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImg = async () => {
    setIsLoading(true);
    try {
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      // console.log(data);

      setPhotos((oldData) => {
        return [...oldData, ...data];
      });
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchImg();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      // console.log("scroll content");

      if (
        window.innerHeight + window.scrollY >
          document.body.offsetHeight - 350 &&
        !isLoading
      ) {
        // console.log("Load content");

        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", event);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>Infinite Scroll Photo | Unsplash API</h1>
      <section className="photos">
        <div className="display-photo">
          {photos.map((data, index) => {
            return <Photos key={index} {...data} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
