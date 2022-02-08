import React, { useState } from 'react';
import q from './PhotoSlider.module.css';
import DataSlider from "./DataSlider";
import BtnSlider from './BtnSlider';


const PhotoSlider = () => {

    const photoSlide = q.photoSlide;
    const photoSlideActive = q.photoSlide + " " + q.active;

    const dot = q.dot;
    const activeDot = q.activeDot + " " + q.dot;

    const [slideIndex, setSlideIndex] = useState(1);


    const nextSlide = () => {
        if (slideIndex !== DataSlider.length) {
            setSlideIndex(slideIndex + 1)
        } else if
            (slideIndex === DataSlider.length) {
            setSlideIndex(1)
        }
    }

    setTimeout(nextSlide, 2800);

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
            clearTimeout(nextSlide);

        } else if (slideIndex === 1) {
            setSlideIndex(DataSlider.length);
            clearTimeout(nextSlide);
        }

    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return (
        <div className={q.containerSlider}>

            {DataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? photoSlideActive : photoSlide}
                    >
                        <img
                            src={obj.imgSrc} />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={q.next} />
            <BtnSlider moveSlide={prevSlide} direction={q.prev} />

            <div className={q.containerDots}>
                {Array.from({ lenght: 3 }).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? activeDot : dot}
                    >

                    </div>
                ))}
            </div>

        </div>
    )
}

export default PhotoSlider;
