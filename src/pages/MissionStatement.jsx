import {useState, useEffect } from 'react'
import './Base.css';
import './MissionStatement.css';
import MissionGroupImage from '../assets/images/misc/mission_statement_group.png';
import SlidingContainer from "../components/SlidingContainer.jsx";

export default function MissionStatement(){

    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Our Mission";
    });


    return(
        <div>
            <h1 className='mission-header'>Mission Statement</h1>

            <div className='mission-flex-container'>
                <div style={{flex: "0 0 40%"}}>
                    <p className='center-aligned-text' style={{fontSize: "30px"}}>
                        We seek to develop instruments and techniques to be used to assess environmental conditions and trends by exploiting the revolution underway in instrumentation and platforms which can be used to probe the earth and its atmosphere.
                    </p>
                </div>

                <SlidingContainer direction='left'>
                    <img src={MissionGroupImage} alt='mission statement group image'/>
                </SlidingContainer>

                <br/>
            </div>

            <br/>
        </div>
    )
}
