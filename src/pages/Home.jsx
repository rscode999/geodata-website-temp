import {useState, useEffect, useRef } from 'react'
import './Base.css';
import './Home.css';
import geodataBanner from '../assets/images/members/banner.png';
import homeImage from '../assets/images/misc/home_image.png'
import UpcomingEvents from '../components/UpcomingEvents.jsx';
import SlidingImage from "../components/SlidingImage.jsx";
import {Link} from "react-router-dom";
export default function Home(){

  const[count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const domRef = useRef();
  useEffect(() => {
    document.title = "Home";
  });


  return(
    <>
    <div className='page'>
      <div className='geoBanner'>
        <img src = {geodataBanner} alt={'CUGeoData Banner'} className="banner"/>
      </div>


      <div className="titleHeader">
        <p> We perform ground-breaking research on local environments and ecosystems </p>
      </div>

      <div className="left-aligned-text">
        <p> As the Department of Earth and Atmospheric Science’s only student project team, we have the unique ability to leverage EAS resources and support combined with private funding to perform student-led research in the College of Engineering’s Project Team Program.</p>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>


      <div className="flex-row">
        <SlidingImage src={homeImage} alt="team image" style={{"margin-left": "50px"}}/>

        <div>
          <h2 className="titleHeader" style={{fontSize: "25pt"}}>Our Organization</h2>
          <p className='left-aligned-text'>
            Find out about our mission, impact, and leadership structure.
          </p>

          <Link to='teams' className='custom-button'>Learn More</Link>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>

      <div className='upcoming-events'>
        <UpcomingEvents/>
      </div>
      <div className='land-ack'>
        <p className='side-textbox'>

        </p>
      </div>
      </div>
    </>
  )
}
