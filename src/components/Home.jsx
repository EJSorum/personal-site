import React from 'react';
import style from '../style/Home.module.css';

function Home() {
  return (
    <div className={style.homeDiv} id="home">
      <div className={style.homeBlock}>
        <div className={style.headerDive}>
          <h1 className={style.homeHeader}>Eric Sorum</h1>
          <h3>Self-taught Software Developer</h3>
        </div>
        <p>
          Proficient in:
          <span style={style.green}> JavaScript, HTML5, CSS, React,</span>
          and other web technologies.
        </p>
        <p>
          My proven dedication to learning and passion for coding will quickly make me a productive
          member of your team.
        </p>
      </div>
    </div>
  );
}

export default Home;
