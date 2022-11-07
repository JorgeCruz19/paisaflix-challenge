import { useEffect, useState } from "react";

const Trailers = () => {
  const [trailers, setTrailers] = useState([]);

  const getTrailers = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/trailers`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getTrailers()
      .then((res) => {
        if (res.success) {
          setTrailers(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <section className="trailers-section">
      <h2>Trailers</h2>
      <div className="trailers">
        {trailers.slice(0, 4).map((trailer, index) => (
          <div className="trailer" key={trailer._id}>
            <img src={trailer.trailerImage} alt="Imagen" />
            <div className="trailer-content">
              <span>0{++index}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trailers;
