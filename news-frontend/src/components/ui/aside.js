import style from "../../css/sidebar.module.css";
// import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div>
      <input type="checkbox" id="check" className={style.check} />
      <label htmlFor="check" className={style.label}>
        <i class="fas fa-bars" id={style.btn}></i>
        <i class="fas fa-times" id={style.cancel}></i>
      </label>
      <div className={style.sidebar}>
        <header>
          <i className="fas fa-sliders-h"></i> Preferences
        </header>
        <div className={style.mam}>
          <i className="fa-solid fa-gear"></i>
          <span>Add or Remove</span>
          {/* <ul>
            <li>Add to custom feed</li>
          </ul> */}
        </div>
        <div className={style.mam}>
          <i className="fa-solid fa-person"></i>
          <span>Authors</span>
          <ul>
            <li>
              <i className="fa-solid fa-minus"></i> David
            </li>
          </ul>
        </div>
        <div className={style.mam}>
          <i className="fa-regular fa-newspaper"></i>
          <span>News Channels</span>
          <ul>
            <li>
              <i className="fa-solid fa-minus"></i> BBC News
            </li>
          </ul>
        </div>
        <div className={style.mam}>
          <i className="fa-solid fa-list"></i>
          <span>Categories</span>
          <ul>
            <li>
              <i className="fa-solid fa-plus"></i> Sports
            </li>
            <li>
              <i className="fa-solid fa-minus"></i> Drama & Movies
            </li>
          </ul>
        </div>
        {/* <Link to="/" className={style.active}>
          <i className="fas fa-qrcode"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/">
          <i className="fas fa-link"></i>
          <span>Shortcuts</span>
        </Link>
        <Link to="/">
          <i className="fas fa-stream"></i>
          <span>Overview</span>
        </Link>
        <Link to="/">
          <i className="fas fa-calendar"></i>
          <span>Events</span>
        </Link>
        <Link to="/">
          <i className="far fa-question-circle"></i>
          <span>About</span>
        </Link>
        <Link to="/">
          <i className="fas fa-sliders-h"></i>
          <span>Services</span>
        </Link>
        <Link to="/">
          <i className="far fa-envelope"></i>
          <span>Contact</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Aside;
