import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Movie from "../components/Movie";

const AppRouter = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
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
