import { Link } from "react-router-dom";
import formstyle from "../../css/form.module.css";
// import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

var emailRegex =
  // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;

const SignUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim("Enter valid firstName")
    .strict(true)
    .required("First Name is required"),
  lastName: yup
    .string()
    .trim("Enter valid firstName")
    .strict(true)
    .required("Last Name is required"),
  email: yup
    .string()
    .email()
    .matches(emailRegex, { message: "Enter a valid Email address" })
    .required("Enter a valid email address"),
  password: yup
    .string()
    .matches(passwordRegex, {
      message:
        "Uppercase, lowercase, numbers and symbols from 6 to 16 characters",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const LoginSchema = yup.object().shape({
  email: yup.string().email().required("Enter a valid email address"),
  password: yup.string().required("Enter your password"),
});

const Form = ({
  credentials,
  description,
  handleSubmit: handleCredentials,
}) => {
  const submit = () => {
    handleCredentials(values, errors);
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: credentials,
    validationSchema:
      description.btnName === "Signup" ? SignUpSchema : LoginSchema,
    onSubmit: submit,
  });

  return (
    <>
      <div className={formstyle.container}>
        <div className={formstyle.content}>
          {description.btnName === "Signup" ? (
            <h2>Sign up</h2>
          ) : (
            <h2>Sign in</h2>
          )}
          <form className={formstyle.form} onSubmit={handleSubmit}>
            {description.btnName === "Signup" && (
              <>
                <div className={formstyle.fullname}>
                  <label className={formstyle.inputBox}>
                    <input
                      type="text"
                      required
                      // value={credentials.firstName}
                      // onChange={(e) => {
                      //   setCredentials((state) => {
                      //     return {
                      //       ...state,
                      //       firstName: e.target.value,
                      //     };
                      //   });
                      // }}
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <i>First name</i>
                    <span className={formstyle.error}>
                      {errors?.firstName &&
                        errors?.firstName?.length !== 0 &&
                        errors.firstName}
                    </span>
                  </label>

                  <label className={formstyle.inputBox}>
                    <input
                      type="text"
                      required
                      // value={credentials.lastName}
                      // onChange={(e) => {
                      //   setCredentials((state) => {
                      //     return {
                      //       ...state,
                      //       lastName: e.target.value,
                      //     };
                      //   });
                      // }}
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <i>Last name</i>
                    <span className={formstyle.error}>
                      {errors?.lastName &&
                        errors?.lastName?.length !== 0 &&
                        errors.lastName}
                    </span>
                  </label>
                </div>
              </>
            )}
            <label className={formstyle.inputBox}>
              <input
                type="text"
                required
                // value={credentials.email}
                // onChange={(e) => {
                //   setCredentials((state) => {
                //     return {
                //       ...state,
                //       email: e.target.value,
                //     };
                //   });
                // }}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <i>Email</i>
              <span className={formstyle.error}>
                {errors?.email && errors.email}
              </span>
            </label>
            <label className={formstyle.inputBox}>
              <input
                type="password"
                required
                // value={credentials.password}
                // onChange={(e) => {
                //   setCredentials((state) => {
                //     return {
                //       ...state,
                //       password: e.target.value,
                //     };
                //   });
                // }}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <i>Password</i>
              <span className={formstyle.error} id={formstyle.password}>
                {errors?.password && errors.password}
              </span>
            </label>
            {description.btnName === "Signup" && (
              <>
                {/* <br /> */}
                <label className={formstyle.inputBox}>
                  <input
                    type="password"
                    required
                    // value={credentials.confirmPassword}
                    // onChange={(e) => {
                    //   setCredentials((state) => {
                    //     return {
                    //       ...state,
                    //       confirmPassword: e.target.value,
                    //     };
                    //   });
                    // }}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <i>Confirm Password</i>
                  <span className={formstyle.error}>
                    {errors.confirmPassword}
                  </span>
                </label>
              </>
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
