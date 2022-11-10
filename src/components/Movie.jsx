import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import Trailers from "./Trailers";

const Movie = () => {
  const [hero, setHero] = useState([]);
  const { movieId } = useParams();

  const getHero = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/movies/${movieId}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getHero()
      .then((res) => {
        if (res.success) {
          setHero(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Hero hero={hero} />
      <Trailers trailers={hero} singleTrailer />
    </main>
  );
};

export default Movie;
