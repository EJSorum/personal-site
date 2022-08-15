import React from 'react';
import style from '../style/Contact.module.css';

function Contact() {
  return (
    <div className={style.contactDiv}>
      <div className={style.headerDiv}>
        <h2 id="contact" className={style.contactHeader}>
          Contact
        </h2>
        <div className={style.line} />
      </div>
      <br />
      <div className={style.addressBlock}>
        <span>Eric Sorum</span>
        <span>3527 11th Ave S</span>
        <span>Minneapolis, MN 55407</span>
        <span>(651) 399-6279</span>
        <a href="mailto:ejsorum@gmail.com" style={style.email}>
          ejsorum@gmail.com
        </a>
        <br />
        <a href="https://www.linkedin.com/in/eric-sorum-894b55183/">Find me on LinkedIn</a>
        <a href="https://github.com/EJSorum">View my GitHub profile</a>
      </div>
    </div>
  );
}

export default Contact;
