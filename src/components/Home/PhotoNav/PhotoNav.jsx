import React from "react";
import { NavLink } from "react-router-dom";
import q from "./PhotoNav.module.css";
import img1 from "./assets/f1.jpg";
import img2 from "./assets/f2.jpg";
import img3 from "./assets/f3.jpg";
import img4 from "./assets/f4.JPG";
import img5 from "./assets/f5.jpg";
import img6 from "./assets/f6.jpg";
import img7 from "./assets/f7.jpg";
import img8 from "./assets/f8.jpg";
import img9 from "./assets/f9.jpg";

const PhotoNav = () => {
  return (
    <div className={q.photosBlock}>
      <div className={q.photoBlock}>
        <div className={q.photoItem}>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/portrait">
                <img src={img1} alt="photo" />
                <span className={q.textLink}>Portrait</span>
              </NavLink>
            </div>
          </div>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/outdoor">
                <img src={img2} alt="photo" />
                <span className={q.textLink}>Outdoor</span>
              </NavLink>
            </div>
          </div>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/studio">
                <img src={img3} alt="photo" />
                <span className={q.textLink}>Studio</span>
              </NavLink>
            </div>
          </div>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/lovestory">
                <img src={img4} alt="photo" />
                <span className={q.textLink}>Love Story</span>
              </NavLink>
            </div>
          </div>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/business">
                <img src={img5} alt="photo" />
                <span className={q.textLink}>Business</span>
              </NavLink>
            </div>
          </div>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/photohistory">
                <img src={img6} alt="photo" />
                <span className={q.textLink}>Photohistory</span>
              </NavLink>
            </div>
          </div>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/family">
                <img src={img7} alt="photo" />
                <span className={q.textLink}>Family</span>
              </NavLink>
            </div>
          </div>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/landscape">
                <img src={img8} alt="photo" />
                <span className={q.textLink}>Landscape</span>
              </NavLink>
            </div>
          </div>
          <div className={q.item}>
            <div className={q.link}>
              <NavLink to="/architecture">
                <img src={img9} alt="photo" />
                <span className={q.textLink}>Architecture</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoNav;
