import React from "react";
import FunctionPortfolio from "../FunctionPortfolio";

import img1 from "./assets/f1.JPG";
import img2 from "./assets/f2.JPG";
import img3 from "./assets/f3.JPG";
import img4 from "./assets/f4.JPG";
import img5 from "./assets/f5.JPG";
import img6 from "./assets/f6.JPG";
import img7 from "./assets/f7.JPG";

const LoveStory = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
  ];

  return <FunctionPortfolio data={data} />;
};

export default LoveStory;
