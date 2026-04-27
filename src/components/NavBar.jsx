import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logophoto from '../assets/images/members/favgeo.png';

const NavBar = () => {
  return (
        <nav className = "navbar">
          <div className = "logo">
            <Link to="/"><img src={logophoto} alt={'CU GeoData logo'} className="logo_photo"/></Link>
          </div>
          <ul className="nav-links">
          <li><Link to="/"><span className="navText">Home</span></Link></li>
          <li><Link to="our-work"><span className="navText">Our Work</span></Link></li>
          <li className="dropdown">
            <Link to="teams"><span className="navText">Teams&#9662;</span></Link>
            <ul className="dropdown-content">
              <li><Link to="data">Data</Link></li>
              <li><Link to="air">Air</Link></li>
              <li><Link to="rock">Rock</Link></li>
              <li><Link to="water">Water</Link></li>
              <li><Link to="tech">Tech</Link></li>
              <li><Link to="snipe-challenge">Snipe Challenge</Link></li>
            </ul>
          </li>
          <li><Link to="members"><span className="navText">Members</span></Link></li>
          <li><Link to="recruitment"><span className="navText">Recruitment</span></Link></li>
          </ul>
          <ul className = "donate">
            <li><Link to="donate">Donate</Link></li>
          </ul>
      </nav>
    
  );
};

export default NavBar;
