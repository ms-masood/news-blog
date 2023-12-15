import { useState } from "react";
import Form from "./ui/form";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };
  return (
    <>
      <Form
        description={{
          btnName: "Signup",
          link: "/login",
          text: "Already have an account?",
        }}
        credentials={credentials}
        setCredentials={setCredentials}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Signup;
