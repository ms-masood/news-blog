import { Link } from "react-router-dom";
import style from "../../css/redirect.module.css";

const Page404 = () => {
  return (
    <div className={style.redirect}>
      <h1>Error: 404</h1>
      <p>Oops! The page you are trying to access does not exist.</p>
      <span>Go back to homepage</span>
      <Link to={"/"}>HomePage</Link>
    </div>
  );
};

export default Page404;
