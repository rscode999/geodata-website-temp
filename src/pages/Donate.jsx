import {useState, useEffect} from 'react'
import sponsorshipLevelsImg from '../assets/images/misc/sponsorship_levels.png';
import './Donate.css'

export default function Donate(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Donate`;
  });

  return(
     <>
        <h1 className="titleHeader">Donate</h1>

        <div className="donate-header">
            <img src={sponsorshipLevelsImg} alt={"sponsorship levels"}/>
        </div>
         <p className="subheading">level 0: we hack your bank account</p>

         <br/>
         <br/>
         {/*This link is temporary. Ask Business Team for the sponsorship packet.*/}
         <a href="https://www.youtube.com/watch?v=xW0IR3q0EvE" className="subheading">Sponsorship Packet</a>

     </>
  )
}