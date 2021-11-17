import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import More from './components/More/More';
import Footer from './components/Footer/Footer';
import Architecture from './components/Portfolio/Architecture/Architecture';
import Business from './components/Portfolio/Business/Business';
import Family from './components/Portfolio/Family/Family';
import Landscape from './components/Portfolio/Landscape/Landscape';
import Outdoor from './components/Portfolio/Outdoor/Outdoor';
import Photohistory from './components/Portfolio/Photohistory/Photohistory';
import Portrait from './components/Portfolio/Portrait/Portrait';
import Studio from './components/Portfolio/Studio/Studio';
import LoveStory from './components/Portfolio/LoveStory/LoveStory';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (<BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <div className='app-wrapper-content'>
        <Route path='/home' component={Home} />
        <Route path='/architecture' component={Architecture} />
        <Route path='/business' component={Business} />
        <Route path='/family' component={Family} />
        <Route path='/landscape' component={Landscape} />
        <Route path='/outdoor' component={Outdoor} />
        <Route path='/photohistory' component={Photohistory} />
        <Route path='/portrait' component={Portrait} />
        <Route path='/studio' component={Studio} />
        <Route path='/lovestory' component={LoveStory} />
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/more' component={More} />
      </div>
      <Footer />
    </div>

  </BrowserRouter>
  );
}

export default App;
