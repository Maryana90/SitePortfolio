import React from 'react';
import q from './Header.module.css';
import Nav from './Nav/Nav';
import HeaderInner from './HeaderInner/HeaderInner'; 

const Header = () => {
    return (
        <div className={q.header}>
            <HeaderInner />
            <Nav />
        </div>
    )
}

export default Header;