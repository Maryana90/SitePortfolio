import React from "react";
import q from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className={q.list}>
      <li
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className={q.item}
      >
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={q.itemDot}>•</li>
      <li
        className={q.item + " " + q.itemPortfolio}
      >
        <div className={q.navPortfolio}>
          <button className={q.button}>
            Portfolio
            <div className={q.portfoloiItems}>
              <ul className={q.navList}>
                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/portrait" activeClassName={q.activeLink}>
                    • Portrait
                  </NavLink>
                </li>
                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/outdoor" activeClassName={q.activeLink}>
                    • Outdoor
                  </NavLink>
                </li>
                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/studio" activeClassName={q.activeLink}>
                    • Studio
                  </NavLink>
                </li>
                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/lovestory" activeClassName={q.activeLink}>
                    • Love story
                  </NavLink>
                </li>
                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/business" activeClassName={q.activeLink}>
                    • Business
                  </NavLink>
                </li>

                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/photohistory" activeClassName={q.activeLink}>
                    • Photohistory
                  </NavLink>
                </li>

                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/family" activeClassName={q.activeLink}>
                    • Family
                  </NavLink>
                </li>
                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/landscape" activeClassName={q.activeLink}>
                    • Landscape
                  </NavLink>
                </li>
                <li
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={q.navItem}
                >
                  <NavLink to="/architecture" activeClassName={q.activeLink}>
                    • Architecture
                  </NavLink>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </li>
      <li className={q.itemDot}>•</li>
      <li
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className={q.item}
      >
        <NavLink to="/about" activeClassName={q.activeLink}>
          About
        </NavLink>
      </li>
      <li className={q.itemDot}>•</li>
      <li
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className={q.item}
      >
        <NavLink to="/contacts" activeClassName={q.activeLink}>
          Contacts
        </NavLink>
      </li>
      <li className={q.itemDot}>•</li>
      <li
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className={q.item}
      >
        <NavLink to="/more" activeClassName={q.activeLink}>
          More..
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
