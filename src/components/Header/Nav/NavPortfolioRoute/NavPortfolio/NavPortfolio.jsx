import React from 'react';
import q from './NavPortfolio.module.css';
import { NavLink } from 'react-router-dom';


const NavPortfolio = () => {
    return (
        <nav className={q.nav}>
            <ul className={q.list}>
                <li className={q.item}>
                    <NavLink to='/architecture' activeClassName={q.activeLink}>Architecture</NavLink>
                </li>
                <li className={q.item}>
                    <NavLink to='/business' activeClassName={q.activeLink}>Business</NavLink>
                </li>
                <li className={q.item}>
                    <NavLink to='/family' activeClassName={q.activeLink}>Family</NavLink>
                </li>
                <li className={q.item}>
                    <NavLink to='/landscape' activeClassName={q.activeLink}>Landscape</NavLink>
                </li>
                <li className={q.item}>
                    <NavLink to='/outdoor' activeClassName={q.activeLink}>Outdoor</NavLink>
                </li>
                <li className={q.item}>
                    <NavLink to='/photohistory' activeClassName={q.activeLink}>Photohistory</NavLink>
                </li>
                <li className={q.item}>
                    <NavLink to='/portrait' activeClassName={q.activeLink}>Portrait</NavLink>
                </li>
                <li className={q.item}>
                    <NavLink to='/studio' activeClassName={q.activeLink}>Studio</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavPortfolio;