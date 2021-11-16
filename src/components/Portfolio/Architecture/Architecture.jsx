import React from "react";
import qq from "./Architecture.module.css";
import q from "./../PhotoStyles.module.css";
import img1 from "./assets/f1.jpg";
import img2 from "./assets/f2.jpg";
import img3 from "./assets/f3.jpg";
import img4 from "./assets/f4.jpg";
import img5 from "./assets/f5.jpg";
import img6 from "./assets/f6.jpg";
import img7 from "./assets/f7.jpg";
import img8 from "./assets/f8.jpg";
import img9 from "./assets/f9.jpg";

const Architecture = () => {
  return (
    <div className={q.content}>
      <div>
        <p className={q.title}>Architecture</p>
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
          <img src={img8} alt="img8" />
          <img className={q.gorizontal} src={img9} alt="img9" />
        </div>
      </div>
    </div>
  );
};

export default Architecture;
