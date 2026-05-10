import {useState, useEffect, useRef } from 'react'
import './Base.css';
import './Home.css';
import geodataBanner from '../assets/images/members/banner.png';
import homeImage from '../assets/images/misc/home_group_photo.png'
import homeTopImage from '../assets/images/misc/home_background_top.png'
import UpcomingEvents from '../components/UpcomingEvents.jsx';
import SlidingContainer from "../components/SlidingContainer.jsx";
import {Link} from "react-router-dom";
import EventCard from "../components/EventCard.jsx";
import upcomingEventsData from "../components/Upcoming Events Data.js";

export default function Home(){

  const[count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Home";
  });


  return(
    <>
    <div className='page'>
      <div style={{ backgroundImage: `url(${homeTopImage})`, minHeight: "30vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", padding: "20px"}}>
        <div className='geoBanner'>
          <img src = {geodataBanner} alt={'CUGeoData Banner'}/>
        </div>

        <div className="titleHeader" style={{color: "white", WebkitTextStroke: "0.3px black"}}>
          <p> We perform ground-breaking research on local environments and ecosystems </p>
        </div>
      </div>

      <br/>
      <br/>
      <br/>

      <div className="center-aligned-text">
        <p> As the Department of Earth and Atmospheric Science’s only student project team, we have the unique ability to leverage EAS resources and support combined with private funding to perform student-led research in the College of Engineering’s Project Team Program.</p>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>


      <div className="home-flex-row">
        <SlidingContainer direction='left'>
          <img src={homeImage} alt="team image" style={{"margin-left": "50px"}}/>
        </SlidingContainer>

        <div>
          <h2 className="titleHeader" style={{fontSize: "25pt"}}>Our Organization</h2>
          <p className='left-aligned-text'>
            Find out about our mission, impact, and leadership structure.
          </p>
          <br/>
          <Link to='mission-statement' className='link-button'>Learn More</Link>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>

      <div className='upcoming-events-banner'>
        <SlidingContainer direction='right'>
          <UpcomingEvents/>
        </SlidingContainer>
      </div>

      <div className='upcoming-events-list'>
        {upcomingEventsData.map(event => (
            <EventCard
              id={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
              linkText={event.linkText}
              linkDestination={event.linkDestination}
            />
        ))}
      </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>

    <div className='land-ack' style={{marginLeft: "5%", marginRight: "5%"}}>
      <p>Cornell University is located on the traditional homelands of the Gayogo̱hó:nǫɁ (the Cayuga Nation). The Gayogo̱hó:nǫɁ are members of the Haudenosaunee Confederacy, an alliance of six sovereign nations with a historic and contemporary presence on this land. The confederacy precedes the establishment of Cornell University, New York state and the United States of America. We acknowledge the painful history of Gayogo̱hó:nǫɁ dispossession, and honor the ongoing connection of Gayogo̱hó:nǫɁ people, past and present, to these lands and waters.</p>
    </div>

    </>
  )
}
