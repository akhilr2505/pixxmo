import React from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import SignupForm from "./SignupForm";
import "./SignupForm.css";
import Header from "./Header";

const LoginScreen = () => {
  return (
    <>
      <Header />
      <div className="overall">
        <div className="signupPage">
          <div className="modal__container">
            <MediaQuery minDeviceWidth={200} device={{ deviceWidth: 1600 }}>
              <div className="modal__sec1">
                <div className="modal__content">
                  <p className="modal__welcome">Welcome Back</p>
                  <p className="modal__signIn">Sign in to continue.</p>
                </div>
              </div>
            </MediaQuery>
            <div className="modal__sec2">
              <div className="modal__content2">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
