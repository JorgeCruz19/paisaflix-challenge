import { NavLink, useLocation } from "react-router-dom";
import Avatar from "../assets/avatar.jpg";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/")[1];

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <NavLink to="/">
          <h1 className="navbar-title">Paisaflix</h1>
        </NavLink>

        <ul className="navbar-menu">
          <li className={`navbar-item  ${pathname == "/" && "is-active"} `}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={`navbar-item  ${splitLocation == "contact" && "is-active"} `}>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li className={`navbar-item  ${splitLocation == "faq" && "is-active"} `}>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li className={`navbar-item  ${splitLocation == "pricing" && "is-active"} `}>
            <NavLink to="/pricing">Princig</NavLink>
          </li>
        </ul>
        <div className="secondary-navigation">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="navbar-search">
            <path
              d="M20.707 19.293L16.168 14.754C17.5149 13.0464 18.1584 10.8888 17.967 8.72241C17.7755 6.55604 16.7635 4.5447 15.1381 3.09984C13.5126 1.65499 11.3964 0.885838 9.22258 0.949729C7.04871 1.01362 4.9814 1.90573 3.44358 3.44355C1.90576 4.98137 1.01365 7.04868 0.949759 9.22255C0.885869 11.3964 1.65502 13.5125 3.09988 15.138C4.54473 16.7635 6.55607 17.7755 8.72244 17.9669C10.8888 18.1584 13.0465 17.5148 14.754 16.168L19.293 20.707L20.707 19.293ZM9.49998 16C8.21441 16 6.9577 15.6187 5.88878 14.9045C4.81986 14.1903 3.98674 13.1751 3.49477 11.9874C3.0028 10.7997 2.87408 9.49274 3.12488 8.23187C3.37568 6.97099 3.99475 5.8128 4.90379 4.90376C5.81283 3.99472 6.97102 3.37565 8.2319 3.12485C9.49277 2.87405 10.7997 3.00277 11.9874 3.49474C13.1751 3.98671 14.1903 4.81983 14.9045 5.88875C15.6188 6.95767 16 8.21438 16 9.49995C15.9979 11.2232 15.3124 12.8753 14.0938 14.0938C12.8753 15.3123 11.2232 15.9978 9.49998 16Z"
              fill="white"
            />
          </svg>
          <img src={Avatar} alt="Avatar" className="navbar-avatar" />
          <p className="navbar-username">Soy Paisanx</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
