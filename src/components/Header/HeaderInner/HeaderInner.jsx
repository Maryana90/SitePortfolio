import React from 'react';
import q from './HeaderInner.module.css';
import { BrowserRouter } from 'react-router-dom';

const HeaderInner = () => {
    return (
        <BrowserRouter>
            <header className={q.headerInner}>
                <div></div>
                <div className={q.name}>Lilia Minenko Photography</div>
                <div className={q.lang}>
                    {/* <Route path='/eng' component='#' />
                    <Route path='/ua' component='#' />
                    <Route path='/ru' component='#' /> */}
                    <span>ENG</span>
                    <span>UA</span>
                    <span>RU</span>
                </div>
            </header>
        </BrowserRouter>
    )
}

export default HeaderInner;