import { Outlet } from "react-router-dom";
import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Trailers from "./components/Trailers";

function Home() {
  return (
    <main>
      <Hero />
      <Trailers />
      <Featured />
    </main>
  );
}

export default Home;
