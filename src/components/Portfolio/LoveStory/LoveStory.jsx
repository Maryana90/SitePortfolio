import React from "react";
import qq from "./LoveStory.module.css";
import q from "./../PhotoStyles.module.css";
import img1 from "./assets/f1.JPG";
import img2 from "./assets/f2.JPG";
import img3 from "./assets/f3.JPG";
import img4 from "./assets/f4.JPG";
import img5 from "./assets/f5.JPG";
import img6 from "./assets/f6.JPG";
import img7 from "./assets/f7.JPG";

const LoveStory = () => {
  return (
    <div className={q.content}>
      <div>
        <p className={q.title}>Love Story</p>
      </div>
      <div className={q.photos}>
        <div className={q.photoItem}>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
          <img src={img5} alt="img5" />
          <img src={img6} alt="img6" />
          <img src={img7} alt="img7" />
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
