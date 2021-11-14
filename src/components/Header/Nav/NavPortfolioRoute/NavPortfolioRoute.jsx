import React from 'react';
import q from './NavPortfolioRoute.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Architecture from './../../../Portfolio/Architecture/Architecture';
import Business from './../../../Portfolio/Business/Business';
import Family from './../../../Portfolio/Family/Family';
import Landscape from './../../../Portfolio/Landscape/Landscape';
import Outdoor from './../../../Portfolio/Outdoor/Outdoor';
import Photohistory from './../../../Portfolio/Photohistory/Photohistory';
import Portrait from './../../../Portfolio/Portrait/Portrait';
import Studio from './../../../Portfolio/Studio/Studio';


const NavPortfolioRoute = () => {
    return (
        <BrowserRouter>
            <div className={q.navPortfolio}>
              <button className={q.button}>
                Portfolio
                <div className={q.navPortfolioItems}>
                  <Route path='/architecture' component={Architecture} />
                  <Route path='/business' component={Business} />
                  <Route path='/family' component={Family} />
                  <Route path='/landscape' component={Landscape} />
                  <Route path='/outdoor' component={Outdoor} />
                  <Route path='/photohistory' component={Photohistory} />
                  <Route path='/portrait' component={Portrait} />
                  <Route path='/studio' component={Studio} />
                </div>
              </button>

            </div>
          </BrowserRouter>
    )
}

export default NavPortfolioRoute;