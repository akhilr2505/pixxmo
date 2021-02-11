import React, { useState, useEffect } from "react";

import "./SignupForm.css";
import "./ModalForm.css";
import { Formik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/.+?(?:[\s'].+?){1,}$/, "Invalid name"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,}$/,
      "Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)"
    ),
});

const VerificationForm = (email) => {
  return (
    <form className="modal__form form2">
      <h2 className="verifyDiv verifyTitle">We Need to Verify your Email</h2>
      <div className="infodiv verifyDiv">
        We sent an email to the address you provided when you created your
        account. Verify your email to continue
      </div>

      <input
        type="email"
        className="email-input verifyInput"
        value={email}
        disabled={true}
      />
      <hr className="verificationHr" />
      <div className="infodiv verifyDiv">
        Click on the link in that email to verify your account. You may need to
        check your <b>spam</b> folder.
      </div>
      <div className="infodiv bottomVerifyDiv ">
        <button className="create-acc verify-button">
          Don't see it? Resend
        </button>
        <div className="log-in verifyLogOut">
          Not Your Account ? <span className="log-in-link">Log Out</span>
        </div>
      </div>
    </form>
  );
};

export const SignupForm = () => {
  const [state, setState] = useState(false);

  const [value, setValue] = useState(false);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home__modal">
      <Formik
        className="signupForm"
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(data) => console.log(data)}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => {
          return (
            <>
              <form onSubmit={handleSubmit} className="modal__form">
                <label>Your Full Name</label>
                <input
                  placeholder="Enter Your Full Name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <p className="modal__errors">
                    <ErrorIcon /> {errors.name}
                  </p>
                )}
                <label>Your Email Address</label>
                <input
                  placeholder="Enter Email Address"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <p className="modal__errors">
                    <ErrorIcon /> {errors.email}
                  </p>
                )}
                <label>Password</label>
                <input
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <p className="modal__errors">
                    <ErrorIcon /> {errors.password}
                  </p>
                )}

                <button
                  className="home__login"
                  type="submit"
                  onClick={() => {}}
                  disabled={
                    values.name.length <= 0 ||
                    values.email.length <= 0 ||
                    values.password.length <= 0 ||
                    errors.name ||
                    errors.email ||
                    errors.password
                  }
                >
                  Signup
                </button>
              </form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignupForm;
