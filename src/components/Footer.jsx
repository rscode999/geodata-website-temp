import React from 'react';
import './Footer.css';
import instagram from '../assets/images/logos/instagram.png';
import linkedIn from '../assets/images/logos/linkedin.png';

const Footer = () =>{
    return(
        <div className = "footer">
            <ul className='footer-links'>
                <li>
                    <p>Ithaca, NY 14850</p>
                </li>
                <li className='insta'>
                    <a href = "https://www.instagram.com/cugeodata/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt={'Instagram Logo'} className="instagram"/>
                    </a>
                </li>
                <li className='link'>
                    <a href = "https://www.linkedin.com/company/cu-geodata/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt={"LinkedIn Logo"} className = "linkedIn"/>
                    </a>
                </li>
                <li>
                    <a href={"mailto:cugeodata@cornell.edu"}>cugeodata@cornell.edu</a>
                </li>
            </ul>
            <p>Registered Student Organization of Cornell University</p>
        </div>
    );
};

export default Footer;