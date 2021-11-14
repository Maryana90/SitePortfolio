import React from 'react';
import q from './Portfolio.module.css';
import NavPortfolioRoute from "./../Header/Nav/NavPortfolioRoute/NavPortfolioRoute";
import { BrowserRouter, Route } from 'react-router-dom';
import Architecture from './../Portfolio/Architecture/Architecture';
import Business from './../Portfolio/Business/Business';
import Family from './../Portfolio/Family/Family';
import Landscape from './../Portfolio/Landscape/Landscape';
import Outdoor from './../Portfolio/Outdoor/Outdoor';
import Photohistory from './../Portfolio/Photohistory/Photohistory';
import Portrait from './../Portfolio/Portrait/Portrait';
import Studio from './../Portfolio/Studio/Studio';
import LoveStory from './../Portfolio/LoveStory/LoveStory';
import NavPortfolio from './../Header/Nav/NavPortfolioRoute/NavPortfolio/NavPortfolio';

const Portfolio = () => {
  return (
    <BrowserRouter>
      <div className={q.navPortfolio}>
        <button className={q.button}>
          Portfolio
          <div className={q.portfoloiItems}>
            <NavPortfolio />
          </div>
          <div>
            <Route path="/architecture" component={Architecture} />
            <Route path="/business" component={Business} />
            <Route path="/family" component={Family} />
            <Route path="/landscape" component={Landscape} />
            <Route path="/outdoor" component={Outdoor} />
            <Route path="/photohistory" component={Photohistory} />
            <Route path="/portrait" component={Portrait} />
            <Route path="/studio" component={Studio} />
            <Route path="/lovestory" component={LoveStory} />
          </div>
        </button>
      </div>
    </BrowserRouter>
  );
};

export default Portfolio;
