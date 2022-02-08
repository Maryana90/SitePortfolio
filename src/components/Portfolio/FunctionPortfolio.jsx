import React, { useState } from "react";
import q from "./PhotoStyles.module.css";
import x from "./icons/x.svg";
import chevronLeft from "./icons/chevron-left.svg";
import chevronRight from "./icons/chevron-right.svg";

const FunctionPortfolio = (props) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  // const [image, setImage] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const completedClasses = q.model + " " + q.open;
  const completedClass = q.model;

  return (
    <>
      <div className={model ? completedClasses : completedClass}>
        <svg
          xmlns={chevronLeft}
          id={q.chevronLeft}
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
          // onClick={() => setImage())}
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <img src={tempImgSrc} />
        <svg
          xmlns={chevronRight}
          id={q.chevronRight}
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
          onClick={() => setModel(false)}
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <svg
          xmlns={x}
          id={q.x}
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
          onClick={() => setModel(false)}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <div className={q.gallery}>
        {props.data.map((item, index) => {
          return (
            <div
              className={q.pics}
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{ width: "100%" }}
                alt={props.data.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FunctionPortfolio;
