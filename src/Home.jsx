import { useEffect, useState } from "react";
import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Trailers from "./components/Trailers";

function Home() {
  const [hero, setHero] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [movies, setMovies] = useState([]);

  const getData = () => {
    const heroData = fetch(`${import.meta.env.VITE_API_URL}/hero`).then((res) => res.json());
    const trailersData = fetch(`${import.meta.env.VITE_API_URL}/trailers`).then((res) => res.json());
    const moviesData = fetch(`${import.meta.env.VITE_API_URL}/movies`).then((res) => res.json());

    return [heroData, trailersData, moviesData];
  };

  useEffect(() => {
    const promises = getData();
    Promise.allSettled(promises).then((results) => {
      const filteredResults = results.filter((result) => result.status === "fulfilled");
      const [heroData, trailersData, moviesData] = filteredResults.map((result) => result.value);
      setHero(heroData.data);
      setTrailers(trailersData.data);
      setMovies(moviesData.data);
    });
  }, []);

  return (
    <main>
      <Hero hero={hero} />
      <Trailers trailers={trailers} />
      <Featured movies={movies} />
    </main>
  );
}

export default Home;
