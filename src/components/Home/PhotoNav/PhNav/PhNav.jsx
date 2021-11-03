import React from 'react';
import q from './PhNav.module.css';
import photo from './../Photos/ph1.jpg'

const PhNav = () => {
    return (
        <div className={q.photoBlock}>
            <img className={q.photoItem} src={photo} alt='photo' />
        </div>
    )
}

export default PhNav;