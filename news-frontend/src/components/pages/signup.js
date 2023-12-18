// import { useState } from "react";
import Form from "../ui/form";
import style from "../../css/logregis.module.css";

const Signup = () => {
  // const [credentials, setCredentials] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className={style.account}>
        <div className={style.account_text}>
          <h1> New Here? Join Us! </h1>
          <p>
            Unlock a world of news and analysis by creating your account. Stay
            connected with the latest updates tailored just for you.
          </p>
        </div>

        <Form
          description={{
            btnName: "Signup",
            link: "/login",
            text: "Already have an account?",
          }}
          credentials={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          // setCredentials={setCredentials}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Signup;
