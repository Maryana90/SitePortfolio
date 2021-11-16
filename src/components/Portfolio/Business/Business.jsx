import React from "react";
import qq from "./Business.module.css";
import q from "./../PhotoStyles.module.css";
import img1 from "./assets/f1.jpg";
import img2 from "./assets/f2.jpg";
import img3 from "./assets/f3.jpg";
import img4 from "./assets/f4.jpg";
import img5 from "./assets/f5.jpg";
import img6 from "./assets/f6.jpg";

const Business = () => {
  return (
    <div className={q.content}>
      <div>
        <p className={q.title}>Business</p>
      </div>
      <div className={q.photos}>
        <div className={q.photoItem}>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
          <img className={q.gorizontal} src={img5} alt="img5" />
          <img className={q.gorizontal} src={img6} alt="img6" />
        </div>
      </div>
    </div>
  );
};

export default Business;
