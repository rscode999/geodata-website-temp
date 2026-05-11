import {useState, useEffect } from 'react'
import './Base.css';
import './MissionStatement.css';
import MissionGroupImage from '../assets/images/misc/mission_statement_group.png';
import ImpactImage from '../assets/images/misc/mission_statement_impact.png';
import SlidingContainer from "../components/SlidingContainer.jsx";
import RevealContainer from "../components/RevealContainer.jsx";

export default function MissionStatement(){

    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Our Mission";
        window.scrollTo(0, 0); //Enters the page at the top
    }, []);


    return(
        <div>
            <h1 className='mission-header' style={{fontSize: "100px"}}>Mission Statement</h1>

            <div className='mission-flex-container'>
                <div>
                    <p className='center-aligned-text' style={{fontSize: "30px"}}>
                        We seek to develop instruments and techniques to be used to assess environmental conditions and
                        trends by exploiting the revolution underway in instrumentation and platforms which can be used
                        to probe the earth and its atmosphere.
                    </p>
                </div>

                <SlidingContainer direction='left'>
                    <img src={MissionGroupImage} alt='mission statement group image'/>
                </SlidingContainer>

                <br/>
            </div>

            <br/>
            <br/>
            <br/>

            <div className='center-aligned-text'> {/*The style class is just for the center alignment*/}
                <RevealContainer delay={250}>
                    <h1 className='mission-header'>EAS + Engineering</h1>
                    <div className='mission-left-aligned-text'>
                        <ul>
                            <RevealContainer delay={150}>
                            <li>CU GeoData is a student-run project team composed of students passionate about integrating
                                the fields of Earth and atmospheric sciences with engineering. We develop and deploy novel
                                instrumentation to record atmospheric, geologic, and hydrologic variables.
                            </li>
                            <li>With a strong foundation in Earth and atmospheric sciences, CU GeoData leverages student
                                knowledge of the physical and chemical processes that shape the natural world, to inform our
                                engineering solutions. We apply this interdisciplinary approach to a range of projects.
                            </li>
                            <li>By integrating earth and atmospheric sciences with engineering, CU GeoData is uniquely
                                positioned to address complex environmental issues that require a deep understanding of the
                                natural systems at play. Through collaborative efforts, the team aims to explore the complex
                                interactions between natural systems and human activities, and to develop innovative
                                solutions to some of the most pressing environmental challenges of our time.
                            </li>
                            </RevealContainer>
                        </ul>
                    </div>
                </RevealContainer>
            </div>

            <br/>
            <br/>
            <br/>

            <div className='video-link-centered'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wxG6uh-Hd4I?si=q3KTz5e2drcym2bA"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className='mission-flex-container'>
                <div>
                    <h1 className='mission-header'>Impact</h1>
                    <p className='mission-left-aligned-text' style={{margin: "0 30px 0 75px"}}>In an age dominated by
                        talks of climate change and ecological footprints, CU GeoData digs deep into the science of
                        these issues. Our team focuses on designing, building and deploying instrumentation capable of
                        recording a large variety of atmospheric, geologic, and hydrological data. With projects ranging
                        from harmful algal bloom (HABs) detection to solar-powered soil monitoring to measuring the
                        effects of air pollutants on Ithaca’s air quality, we aim to better understand crucial aspects
                        of our environment and shared planet.</p>
                </div>

                <SlidingContainer direction='left'>
                    <img src={ImpactImage} alt='mission statement group image'/>
                </SlidingContainer>

                <br/>
            </div>

            <br/>
            <br/>
            <br/>

        </div>
    )
}
