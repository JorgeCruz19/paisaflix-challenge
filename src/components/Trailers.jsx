const Trailers = ({ trailers, singleTrailer }) => {
  const trailer = singleTrailer && trailers;
  const paddingbottom = singleTrailer && "16rem";

  return (
    <section className="trailers-section" style={{paddingBottom: paddingbottom}}>
      <h2>Trailers</h2>
      <div className="trailers">
        {singleTrailer ? (
          <div className="trailer">
            <img src={trailer.trailerImage} alt="Imagen" />
          </div>
        ) : (
          trailers.slice(0, 4).map((trailer, index) => (
            <div className="trailer" key={trailer._id}>
              <img src={trailer.trailerImage} alt="Imagen" />
              <div className="trailer-content">
                <span>0{++index}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Trailers;
