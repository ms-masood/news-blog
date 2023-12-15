import { Link } from "react-router-dom";
import navstyle from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navstyle.navbar}>
      <div className={navstyle.logo}>
        <Link to="/" style={{ color: "white" }}>
          News
        </Link>
      </div>
      <ul className={navstyle.nav_links}>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className={navstyle.hamburger}>
          &#9776;
        </label>
        <div className={navstyle.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Custom Feed</Link>
          </li>

          <li className={navstyle.services}>
            <Link to="/">Search</Link>
            <ul className={navstyle.dropdown}>
              <li>
                <Link to="/">News Source 1</Link>
              </li>
              <li>
                <Link to="/">News Source 2</Link>
              </li>
              <li>
                <Link to="/">News Source 3</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
