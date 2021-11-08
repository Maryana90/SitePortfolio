import React from 'react';
import q from './PhotoNav.module.css';
import PhNav from './PhNav/PhNav';

const PhotoNav = () => {
    return (
        <div className={q.photosBlock}>
            <PhNav />
            <PhNav />
            <PhNav />
            <PhNav />
            <PhNav />
            <PhNav />
            <PhNav />
            <PhNav />
        </div>
    )
}

export default PhotoNav;