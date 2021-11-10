import React from 'react';
import q from './NavPortfolioRoute.module.css';
import {BrowserRouter, Route} from 'react-router-dom';


const NavPortfolioRoute = () => {
    return (
        <BrowserRouter>
            <div className={q.foo}>
                <div className={q.foo}>
                  <Route path='/architecture' component={Architecture} />
                  <Route path='/business' component={Business} />
                  <Route path='/family' component={Family} />
                  <Route path='/landscape' component={Landscape} />
                  <Route path='/outdoor' component={Outdoor} />
                  <Route path='/photohistory' component={Photohistory} />
                  <Route path='/portrait' component={Portrait} />
                  <Route path='/studio' component={Studio} />
                </div>
            </div>
      
          </BrowserRouter>
    )
}

export default NavPortfolioRoute;