import React from 'react';
import q from './Lang.module.css';
import { NavLink } from 'react-router-dom';


const Lang = () => {
    return (
        <nav className={q.lang}>
            <div className={q.langItem}>
                <NavLink to='/eng' activeClassName={q.activeLink}>ENG</NavLink>
            </div>
            <div className={q.langItem}>
                <NavLink to='/ua' activeClassName={q.activeLink}>UA</NavLink>
            </div>
            <div className={q.langItem}>
                <NavLink to='/ru' activeClassName={q.activeLink}>RU</NavLink>
            </div>
        </nav>

    )
}

export default Lang;