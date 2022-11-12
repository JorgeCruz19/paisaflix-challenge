import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Movie from "../components/Movie";

const AppRouter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<Movie />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default AppRouter;
