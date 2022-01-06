import React, { useState } from 'react';
import cn from 'classnames';

function Header({ data }) {

   const [current, setCurrent] = useState(0);
   const { name, occupation, description, address: { city } } = data;
   const links = ['home', 'about', 'resume', 'portfolio', 'testimonials', 'contact'];


   return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               {links.map((link, index) => (
                  <li key={index} className={cn({'current': current === index})} onClick={() => setCurrent(index)}>
                     <a className='smoothscroll' href={`#${link}`}>
                        {link}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm {name}.</h1>
               <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
               <hr />
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
   );
}

export default Header;
