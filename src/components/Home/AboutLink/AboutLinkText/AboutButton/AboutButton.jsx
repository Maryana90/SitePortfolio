import React from 'react';
import q from './AboutButton.module.css';

const AboutButton = () => {
    return (
        <div>
            <button className={q.button}>
                <span className={q.textButton}>Read more</span>
            </button>
        </div>
    )
}

export default AboutButton;