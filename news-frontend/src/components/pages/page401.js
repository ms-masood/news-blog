import { Link } from "react-router-dom";
import style from "../../css/redirect.module.css";

const Page401 = () => {
  return (
    <div className={style.redirect}>
      <h1>Error: 401</h1>
      <p>Oops! Session Expired.</p>
      <span>Login for a new session</span>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Page401;
