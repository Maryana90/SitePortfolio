import React from 'react';
import q from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import NavPortfolioRoute from './NavPortfolioRoute/NavPortfolioRoute';
import Portfolio from '../../Portfolio/Portfolio';

const Nav = () => {
    return (
        <nav className={q.nav}>
            <ul className={q.list}>
                <li className={q.item}>
                    <NavLink to='/home' activeClassName={q.activeLink}>Home</NavLink>
                </li>
                <li className={q.item}>•</li>
                <li className={q.item + ' ' + q.itemPortfolio}>
                    <Portfolio />
                </li>
                <li className={q.item}>•</li>
                <li className={q.item}>
                    <NavLink to='/about' activeClassName={q.activeLink}>About</NavLink>
                </li>
                <li className={q.item}>•</li>
                <li className={q.item}>
                    <NavLink to='/contacts' activeClassName={q.activeLink}>Contacts</NavLink>
                </li>
                <li className={q.item}>•</li>
                <li className={q.item}>
                    <NavLink to='/more' activeClassName={q.activeLink}>More..</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;