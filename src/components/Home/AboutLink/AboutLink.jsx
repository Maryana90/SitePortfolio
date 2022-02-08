import React from 'react';
import q from './AboutLink.module.css';
import photo from './../../About/assets/photographer.jpg';
import AboutLinkHeader from './AboutLinkHeader/AboutLinkHeader';
import AboutLinkText from './AboutLinkText/AboutLinkText';


const AboutLink = () => {
    return (
        <div className={q.aboutLink}>
            <AboutLinkHeader />
            <img className={q.photo} src= {photo} alt='photographer' />
            <AboutLinkText />
        </div>
    )
}

export default AboutLink;