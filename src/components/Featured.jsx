import { useEffect, useState } from "react";
import { convertTime } from "../utils";
const Featured = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/movies`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getMovies()
      .then((res) => {
        if (res.success) {
          setMovies(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="movie-section">
      <div className="movie-headings">
        <h2 className="movie-title">Featured</h2>
        <p className="movie-subtitle">View More</p>
      </div>
      <div className="grid-movie">
        {movies.map((movie) => (
          <article key={movie._id} className="movie-item">
            <img src={movie.coverImage} alt={movie.name} className="movie-image" />
            <span className="movie-genre">{movie.genre}</span>
            <div className="movie-time">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80688 19.0679 4.93215C17.1931 3.05742 14.6513 2.00291 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C19.9976 14.121 19.154 16.1544 17.6542 17.6542C16.1545 19.154 14.121 19.9976 12 20Z"
                  fill="#9A9AB0"
                />
                <path d="M13 6H11V12.414L15.293 16.707L16.707 15.293L13 11.586V6Z" fill="#9A9AB0" />
              </svg>
              <span>{convertTime(movie.duration)}</span>
            </div>
            <h3 className="movie-name">{movie.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Featured;