import React from "react";
import "./LandingPage.css";
import Header from "./Header.js";

const LandingScreen = () => {
  return (
    <>
      <Header />
      <div>
        <img className="landingImg" src="pixxmo1.png" />
        {/* <video className="logo" autoPlay loop muted>
          <source src="Gamify.mp4" type="video/mp4" />
        </video> */}
        <div>
          <h1 class="glitch glitch2">
            <span aria-hidden="true">Welcome to Gamify</span>
            Welcome to Gamify
            <span aria-hidden="true">Welcome to Gamify</span>
          </h1>
          {/* <h3 className="landingPageSubheading">
            The perfect place for all your gaming requirements
          </h3> */}
        </div>

        <h1 class="glitch glitch1">
          <span aria-hidden="true">Coming Soon...</span>
          Coming Soon...
          <span aria-hidden="true">Coming Soon...</span>
        </h1>
      </div>
    </>
  );
};

export default LandingScreen;
