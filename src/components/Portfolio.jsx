import React from 'react';
import style from '../style/Portfolio.module.css';
import veggies from './images/veggies.jpg';
import beer from './images/beer.jpg';
import architecture from './images/architecture.jpg';
import max from './images/max.jpg';
import gallery from './images/gallery.jpg';
import pantry from './images/pantry.jpg';
import tea from './images/tea.jpg';
import site from './images/site.svg';
import github from './images/github.svg';

function Portfolio() {
  return (
    <div className={style.portfolioDiv}>
      <div className={style.portfolioBlock}>
        <div className={style.headerDiv}>
          <h2 id="portfolio" className={style.portfolioHeader}>
            Portfolio
          </h2>
          <div className={style.line} />
        </div>
        <div className={style.projectList}>
          <div className={style.card}>
            <a href="https://ejsorum.github.io/recipe-site/">
              <img src={veggies} alt="Veggies First" className={style.projectImg} />
            </a>
            <div>
              <div className={style.projectHeader}>
                <a href="https://ejsorum.github.io/recipe-site/">
                  <div className={style.projectTitle}>Veggies First</div>
                </a>
                <a href="https://ejsorum.github.io/recipe-site/" className={style.linkSet}>
                  Go to site
                  {' '}
                  <img src={site} alt="Link arrow" className={style.linkIcon} />
                </a>
                <a href="https://github.com/EJSorum/recipe-site" className={style.linkSet}>
                  GitHub repo
                  {' '}
                  <img src={github} alt="Github icon" className={style.linkIcon} />
                </a>
              </div>
              <div className={style.textBlock}>
                <p className={style.description}>
                  Uses the spoonacular.com API to search recipes by ingredient. By clicking a veggie
                  button, a list is displayed of recipes using that veggie. Users may also select
                  the number of recipes to display, and create a custom search for any ingredient.
                </p>
                <ul>
                  <li>functional React components with the useState and useEffect Hooks.</li>
                  <li>async functions to fetch recipe image, ingredients, and instructions.</li>
                  <li>type checking with PropTypes.</li>
                  <li>data extraction from JSON files.</li>
                  <li>form submission.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/Beer-Tools/dist/index.html">
              <img src={beer} alt="Beer Tools" className={style.projectImg} />
              <h3>Beer Tools</h3>
            </a>
            <a href="https://github.com/EJSorum/Beer-Tools">GitHub repo</a>
            <p>
              Performs calculations useful to the beer industry: Converting Julian dates into
              Gregorian Dates; ABV and volume into number of standard drinks, and calculating the
              value per ounce of packaging formats.
            </p>
            <ul>
              <li>rendered using modular functions and Webpack.</li>
              <li>formatted with Prettier, ESLint, and Husky.</li>
            </ul>
          </div>

          <div className={style.card}>
            <a href="https://abcd-architecture.herokuapp.com/">
              <img src={architecture} alt="ABCD Architecture" className={style.projectImg} />
              <h3>ABCD Architecture</h3>
            </a>
            <a href="https://github.com/EJSorum/architecture-page">GitHub repo</a>
            <p>
              A six-page website for a fictional company. Home page designed after
              {' '}
              <a href="http://www.dfdg.com">dfdg.com</a>
            </p>
            <ul>
              <li>React Router.</li>
              <li>CSS animations.</li>
            </ul>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/react-landing/">
              <img src={max} alt="Max's Landing Page" className={style.projectImg} />
              <h3>Max&aposs Landing Page</h3>
            </a>
            <a href="https://github.com/EJSorum/react-landing">GitHub repo</a>
            <p>
              Uses React props to render repetitive elements on a landing page for a fictional
              musician.
            </p>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/tea-shop/">
              <img src={tea} alt="Tea Shop" className={style.projectImg} />
              <h3>Tea Shop</h3>
            </a>
            <a href="https://github.com/EJSorum/tea-shop">GitHub repo</a>
            <p>Uses class components to add items to the shopping cart.</p>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/Gallery/dist/index.html">
              <img src={gallery} alt="Gallery" className={style.projectImg} />
              <h3>Gallery</h3>
            </a>
            <a href="https://github.com/EJSorum/Gallery">GitHub repo</a>
            <p>Dynamically generates an image gallery.</p>
            <ul>
              <li>Object-oriented programming with Webpack and CSS grid.</li>
            </ul>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/Pantry/index.html">
              <img src={pantry} alt="Pantry" className={style.projectImg} />
              <span>Pantry</span>
            </a>
            <a href="https://github.com/EJSorum/Pantry">GitHub repo</a>
            <p>
              Generates a grocery list, allowing users to create items, delete items, and send items
              to the top.
            </p>
            <ul>
              <li>DOM manipulation using vanilla JavaScript.</li>
              <li>splice, for loops, and factory functions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
