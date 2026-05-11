import React from 'react';
import {Link} from 'react-router-dom';

import logoPhoto from '../assets/images/logos/favgeo.png';
import './NavBar.css';

export const donateLink = 'https://securelb.imodules.com/s/1717/giving/interior.aspx?bledit=1&cid=27217&dids=5493&gid=2&pgid=16421&sid=1717&sort=1';

const NavBar = () => {
  return (
        <nav className = "navbar">
          <div className = "logo">
            <Link to="/"><img src={logoPhoto} alt={'CU GeoData logo'} className="logo_photo"/></Link>
          </div>
          <ul className="nav-links">
              <li className="dropdown">
                  <Link to="home"><span className="navText">Home&#9662;</span></Link>
                  <ul className="dropdown-content">
                      <li><Link to="home">Homepage</Link></li>
                      <li><Link to="mission-statement">Mission Statement</Link></li>
                  </ul>
              </li>
              <li><Link to="our-work"><span className="navText">Our Work</span></Link></li>
              <li className="dropdown">
                <Link to="teams"><span className="navText">Teams&#9662;</span></Link>
                <ul className="dropdown-content">
                    <li><Link to="air">Air</Link></li>
                    <li><Link to="business">Business</Link></li>
                    <li><Link to="data">Data</Link></li>
                    <li><Link to="rock">Rock</Link></li>
                    <li><Link to="water">Water</Link></li>
                    <li><Link to="tech">Tech</Link></li>
                </ul>
              </li>
              <li><Link to="members"><span className="navText">Members</span></Link></li>
              <li><Link to="sponsorships"><span className="navText">Sponsors</span></Link></li>
              <li><Link to="recruitment"><span className="navText">Recruitment</span></Link></li>
          </ul>
          <ul className = "donate">
              <li>
                <a href={donateLink}>
                    Donate
                </a>
              </li>
          </ul>
      </nav>
    
  );
};

export default NavBar;
