import React from 'react';
import style from './style/App.module.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className={style.AppDiv}>
      <Nav />
      <div className={style.sections}>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
