import {Link} from "react-router-dom";
import {useEffect} from "react";

import './Base.css';
import './Sponsorships.css';

import sponsorshipPacketFile from '../assets/files/GeoData Sponsorship Packet 2025-26.pdf';
import sponsorshipPacketImage from '../assets/images/misc/sponsorship_packet.png';

import RevealContainer from "../components/RevealContainer.jsx";
import SlidingContainer from "../components/SlidingContainer.jsx";


import {donateLink} from "../components/NavBar.jsx";

export default function Sponsorships() {
    useEffect(() => {
        document.title = "Sponsorships and Funding";
    });

    return (
        <div>
            <div>
                <RevealContainer delay={250}>
                    <h1 className='titleHeader'>CU GeoData is generously supported by the Shen Fund for Social Impact at Cornell Engineering.</h1>
                    <p className='left-aligned-text' style={{marginLeft: "15%", marginRight: "15%"}}>David Shen is a Managing Director at Olympus Capital Asia. Since joining Olympus in Hong Kong in 1998, he has led several of the firm’s investments in the agribusiness, chemicals, financial services,  manufacturing, telecommunications, and technology sector in various markets across the Asia Pacific region. Prior to joining Olympus, Mr.  Shen was with William E. Simon & Sons (Asia), the Asian affiliate of the direct investment group founded by Mr. William Simon Sr., the former U.S. Treasury Secretary under President Nixon and Ford. Before that, Mr. Shen was with Goldman Sachs Group in New York and Hong Kong.  Mr. Shen holds an MBA from the Wharton School of the University of  Pennsylvania and a BS degree from Cornell University.</p>
                </RevealContainer>
            </div>

            <br/>
            <br/>
            <br/>

            <div className='sponsorships-flex-row'>
                <SlidingContainer  className='sponsorships-image'>
                    <img src={sponsorshipPacketImage} alt='sponsorship packet image'/>
                </SlidingContainer>

                <RevealContainer delay={350}>
                    <h1 className='titleHeader'>Make a Donation</h1>
                    <p className='left-aligned-text'>CU GeoData participates in Cornell University’s two fundraising events: Giving and Crowdfunding Day in the Spring and Fall.</p>

                    <p className='left-aligned-text'>We also accept donations on a rolling basis. In order to allow all of our projects to come to fruition, we need your help! Every donation has an impact on student research. </p>

                    <div className='sponsorships-flex-row'>
                        <a href={sponsorshipPacketFile} className='link-button'>Sponsorship Packet</a>
                        <Link to={donateLink} className='link-button'>Donate</Link>
                    </div>
                </RevealContainer>
            </div>

            <br/>

        </div>
    );
}