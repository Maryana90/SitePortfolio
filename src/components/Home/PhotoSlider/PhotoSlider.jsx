import React from 'react';
import q from './PhotoSlider.module.css';
import slide1 from './Photos/Slide1.JPG';


const PhotoSlider = () => {
    return (
        <div className={q.sliderMain}>
            <div className={q.photoSlide}>
                <img src= {slide1} />
            </div>
        </div>
    )
}

export default PhotoSlider;