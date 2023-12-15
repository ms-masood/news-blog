import { Link } from "react-router-dom";
import formstyle from "../form.module.css";

const Form = ({ credentials, setCredentials, description, handleSubmit }) => {
  return (
    <>
      <div className={formstyle.signin}>
        <div className={formstyle.content}>
          <h2>Sign In</h2>
          <form className={formstyle.form} onSubmit={handleSubmit}>
            {description.btnName === "Signup" && (
              <>
                <label className={formstyle.inputBox}>
                  <input type="text" required /> <i>First name</i>
                </label>
                <label className={formstyle.inputBox}>
                  <input type="text" required /> <i>Last name</i>
                </label>
              </>
            )}
            <label className={formstyle.inputBox}>
              <input type="text" required /> <i>Username</i>
            </label>
            <label className={formstyle.inputBox}>
              <input type="password" required /> <i>Password</i>
            </label>
            {description.btnName === "Signup" && (
              <label className={formstyle.inputBox}>
                <input
                  type="password"
                  required
                  onChange={credentials.confirmPassword}
                />{" "}
                <i>Confirm Password</i>
              </label>
            )}
            {description.btnName === "Login" && (
              <label className={formstyle.links}>
                <Link to="/">Forgot Password</Link>
              </label>
            )}
            <h1 style={{ textAlign: "center", color: "white" }}> Or </h1>
            <label className={formstyle.links}>
              {description?.text}
              <Link to={description?.link}>
                {description?.btnName === "Signup" ? "Login" : "Signup"}
              </Link>
            </label>
            <div className={formstyle.inputBox}>
              <input type="submit" value={description?.btnName} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
