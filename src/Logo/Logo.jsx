import React from "react";
import qtify from "../assets/Logo.png";
import search from "../assets/Searchicon.png";
import "./Logo.css";
export const Logo = () => {
  return (
    <>
      <div className="header-style">
        <img src={qtify} alt="qtify" />
        <div>
          <input
            className="input-search"
            name="name"
            placeholder="Search a album of your choice"
          />
          <button className="search-btn">
            <img src={search} className="search-image"/>
          </button>
        </div>
        <button className="feedback-button">Give Feedback</button>
      </div>
    </>
  );
};
