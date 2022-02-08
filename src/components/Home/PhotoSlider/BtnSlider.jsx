import React, { useState } from "react";
import q from "./PhotoSlider.module.css";
import leftArrow from "./assets/angle-left.svg";
import rightArrow from "./assets/angle-right.svg";


//icons - https://www.flaticon.com/ru/uicons

const BtnSlider = ({direction, moveSlide}) => {

    const next = q.next;

    const nextBtn = q.btnSlide + " " + q.next;
    const prevBtn = q.btnSlide + " " + q.prev;

    return ( 

        <button
        onClick={moveSlide}
        className={direction === next ? nextBtn : prevBtn}>
            <img src={direction === next ? rightArrow : leftArrow} />
        </button>
    )
}


export default BtnSlider;