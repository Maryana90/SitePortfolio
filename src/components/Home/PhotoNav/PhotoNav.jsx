import React from "react";
import q from "./PhotoNav.module.css";
import img1 from "./../../Portfolio/Portrait/assets/f1.jpg";
import img2 from "./../../Portfolio/Outdoor/assets/f1.jpg";
import img3 from "./../../Portfolio/Studio/assets/f1.jpg";
import img4 from "./../../Portfolio/LoveStory/assets/f1.JPG";
import img5 from "./../../Portfolio/Business/assets/f1.jpg";
import img6 from "./../../Portfolio/Photohistory/assets/f1.jpg";
import img7 from "./../../Portfolio/Family/assets/f1.jpg";
import img8 from "./../../Portfolio/Landscape/assets/f1.jpg";
import img9 from "./../../Portfolio/Architecture/assets/f1.jpg";

const PhotoNav = () => {
  return (
    <div className={q.photosBlock}>
      <div className={q.photoBlock}>
        <div className={q.photoItem}>
          <img src={img1} alt="photo" />
          <img src={img2} alt="photo" />
          <img src={img3} alt="photo" />
          <img src={img4} alt="photo" />
          <img src={img5} alt="photo" />
          <img src={img6} alt="photo" />
          <img src={img7} alt="photo" />
          <img src={img8} alt="photo" />
          <img src={img9} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default PhotoNav;
