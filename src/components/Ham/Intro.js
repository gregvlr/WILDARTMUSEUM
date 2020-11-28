import React from 'react';

import './Ham.css';
import logo from './Logo_Harvard.svg';

function Intro () {
  return (
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.harvardartmuseums.org/">
          <img className="hamlogo" src={logo} />
          </a>
      <p className="hamintro">
        The Harvard Art Museums are part of Harvard University and comprise three museums: the Fogg Museum (established in 1895),
        the Busch-Reisinger Museum (established in 1903), and the Arthur M. Sackler Museum (established in 1985) and four research centers:
        the Archaeological Exploration of Sardis (founded in 1958), the Center for the Technical Study of Modern Art (founded in 2002), the Harvard Art
        Museums Archives, and the Straus Center for Conservation and Technical Studies (founded in 1928). The three museums that constitute the Harvard
        Art Museums were initially integrated into a single institution under the name Harvard University Art Museums in 1983. The word University was
        dropped from the institutional name in 2008. The collections include approximately 250,000 objects in all media, ranging in date from antiquity
        to the present and originating in Europe, North America, North Africa, the Middle East, South Asia, East Asia, and Southeast Asia.
      </p>
      </div>
  );
}

export default Intro;
