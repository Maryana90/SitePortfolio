import React from 'react';
import q from './Architecture.module.css';
import img1 from './assets/a1.jpg'

const Architecture = () => {
    return (
        <div className={q.photoArray}>
            <img src={img1} alt='img1' />
        </div>
    )
}

export default Architecture;