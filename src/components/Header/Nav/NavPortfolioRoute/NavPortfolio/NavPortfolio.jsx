import React from 'react';
import q from './NavPortfolio.module.css';
import { NavLink } from 'react-router-dom';


const NavPortfolio = () => {
    return (
        <nav className={q.portfolioNav}>
            <ul className={q.navList}>
                <li className={q.navItem}>
                    <NavLink to='/architecture' activeClassName={q.activeLink}>• Architecture</NavLink>
                </li>
                <li className={q.navItem}>
                    <NavLink to='/business' activeClassName={q.activeLink}>• Business</NavLink>
                </li>
                <li className={q.navItem}>
                    <NavLink to='/family' activeClassName={q.activeLink}>• Family</NavLink>
                </li>
                <li className={q.navItem}>
                    <NavLink to='/landscape' activeClassName={q.activeLink}>• Landscape</NavLink>
                </li>
                <li className={q.navItem}>
                    <NavLink to='/outdoor' activeClassName={q.activeLink}>• Outdoor</NavLink>
                </li>
                <li className={q.navItem}>
                    <NavLink to='/photohistory' activeClassName={q.activeLink}>• Photohistory</NavLink>
                </li>
                <li className={q.navItem}>
                    <NavLink to='/portrait' activeClassName={q.activeLink}>• Portrait</NavLink>
                </li>
                <li className={q.navItem}>
                    <NavLink to='/studio' activeClassName={q.activeLink}>• Studio</NavLink>
                </li>
                <li className={q.navItem}>
                    <NavLink to='/lovestory' activeClassName={q.activeLink}>• Love story</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavPortfolio;