import React from 'react';
import q from './AboutLinkText.module.css';
import AboutButton from './AboutButton/AboutButton';

const AboutLinkText = () => {
    return (
        <div className={q.content}>
            <div className={q.textContent}>
            <p className={q.text}>
            Who am I? It's both simple and complicated question. But I started telling about myself from philosophy. 
            </p>
            <p className={q.text}>
            And I'm going to change direction and to tell about myself from reality. 
            </p>
            <p className={q.text}>
            I'm photographer, writer and… business analyst. Funny? 
            </p>
            </div>         
            <AboutButton />
        </div>
    )
}

export default AboutLinkText;