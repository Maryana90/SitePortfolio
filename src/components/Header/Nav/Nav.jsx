import React from "react";
import q from "./Nav.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Nav = () => {
  return (
    <div className={q.navBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Nav;
