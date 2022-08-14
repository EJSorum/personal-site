import React from 'react';
import style from '../style/Nav.module.css';

function Nav() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About </a>
      <a href="#portfolio">Portfolio </a>
      <a href="#contact">Contact </a>
      <a href="./resume/EJSorumResume2022.pdf" download style={style.resume}>
        Resume
      </a>
    </nav>
  );
}

export default Nav;
