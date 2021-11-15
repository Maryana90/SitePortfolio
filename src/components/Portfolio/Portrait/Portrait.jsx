import React from "react";
import q from "./Portrait.module.css";
import img1 from "./assets/p1.jpg";
import img2 from "./assets/p2.jpg";
import img3 from "./assets/p3.jpg";
import img4 from "./assets/p4.jpg";
import img5 from "./assets/p5.jpg";
import img6 from "./assets/p6.jpg";
import img7 from "./assets/p7.jpg";
import img8 from "./assets/p8.jpg";
import img9 from "./assets/p9.jpg";
import img10 from "./assets/p10.jpg";
import img11 from "./assets/p11.jpg";
import img12 from "./assets/p12.jpg";
import img13 from "./assets/p13.jpg";
import img14 from "./assets/p14.jpg";
import img15 from "./assets/p15.jpg";
import img16 from "./assets/p16.jpg";
import img17 from "./assets/p17.jpg";
import img18 from "./assets/p18.jpg";

const Portrait = () => {
  return (
    <div className={q.content}>
      <div>
        <p className={q.title}>Portrait</p>
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
          <img src={img9} alt="img9" />
          <img src={img10} alt="img10" />
          <img src={img11} alt="img11" />
          <img src={img12} alt="img12" />
          <img src={img13} alt="img13" />
          <img src={img14} alt="img14" />
          <img src={img15} alt="img15" />
          <img src={img16} alt="img16" />
          <img className={q.gorizontal} src={img17} alt="img17" />
          <img className={q.gorizontal} src={img18} alt="img18" />
        </div>
      </div>
    </div>
  );
};

export default Portrait;
