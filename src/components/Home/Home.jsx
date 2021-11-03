import React from 'react';
import q from './Home.module.css';
import PhotoSlider from './PhotoSlider/PhotoSlider'; 
import TextContent from './TextContent/TextContent';
import PhotoNav from './PhotoNav/PhotoNav';
import AboutLink from './AboutLink/AboutLink';


const Home = () => {
    return (
        <div>
            <PhotoSlider />
            <TextContent />
            <PhotoNav />
            <AboutLink />
        </div>
    )
}

export default Home;