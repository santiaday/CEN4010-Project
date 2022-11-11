import SearchBar from "./SearchBar/SearchBar.js";
import { ReactComponent as SplashPageDashboard } from "../assets/homepage-splash.svg";
import React, { useState } from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="slogan">
        <h1>Skyrocket Your</h1>
        <h1 className="alt-color">Organic Traffic</h1>
        <p className="slogan-paragraph-text">
          Boost your search engine optimization with ease.
        </p>
        <SearchBar />
      </div>
      <div className="splash-dashboard">
        <SplashPageDashboard />
      </div>
    </div>
  );
};

export default Main;
