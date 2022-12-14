import { generateStarsByCount, convertTime } from "../utils";

const Hero = ({ hero }) => {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero-content">
          <h1>{hero.name}</h1>
          <span className="hero-rating">{generateStarsByCount(hero.rating)}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </p>
          <p>
            <strong>Genre:</strong> {hero.genre}
          </p>
          <p>
            <strong>Duration:</strong> {convertTime(hero.duration)}
          </p>
          <p>
            <strong>Rating:</strong> {hero.rating}
          </p>
          <button>Watch now</button>
        </div>
        <div className="hero-image">
          <img src={hero.coverImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
