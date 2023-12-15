import { useState } from "react";
import Form from "./ui/form";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };
  return (
    <>
      <Form
        description={{
          btnName: "Login",
          link: "/signup",
          text: "Create a new one",
        }}
        credentials={credentials}
        setCredentials={setCredentials}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Login;
