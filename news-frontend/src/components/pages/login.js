// import { useState } from "react";
import Form from "../ui/form";
import style from "../../css/logregis.module.css";

const Login = () => {
  // const [credentials, setCredentials] = useState({
  //   email: "",
  //   password: "",
  // });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={style.account}>
      <div className={style.account_text}>
        <h1>Login</h1>
        <p>
          Stay informed and connected. Log in to access exclusive content,
          personalized updates, and more.
        </p>
      </div>
      <div>
        <Form
          description={{
            btnName: "Login",
            link: "/signup",
            text: "Don't have an Account?",
          }}
          credentials={{ email: "", password: "" }}
          // setCredentials={setCredentials}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
