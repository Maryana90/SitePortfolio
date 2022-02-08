import React from "react";
import q from "./AboutButton.module.css";
import { NavLink } from "react-router-dom";

const AboutButton = () => {
  return (
    <div>
      <button className={q.button}>
        <NavLink to="/about" ClassName={q.textButton}>
          Read more
        </NavLink>
      </button>
    </div>
  );
};


export default AboutButton;
