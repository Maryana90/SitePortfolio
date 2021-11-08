import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import More from './components/More/More';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (<BrowserRouter>
      <div className="app-wrapper">
        <Header />
          <div className='app-wrapper-content'>
            <Route path='/home' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
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
