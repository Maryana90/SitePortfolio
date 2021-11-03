import React from 'react';
import q from './Header.module.css';
import Nav from './Nav/Nav';
import HeaderInner from './HeaderInner/HeaderInner'; 

const Header = () => {
    return (
        <div className={q.head}>
            <div className={q.innerHead}>
            <HeaderInner />
            <Nav />
            </div>
        </div>


    )
}

export default Header;