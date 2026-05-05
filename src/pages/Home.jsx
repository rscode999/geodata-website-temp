import {useState, useEffect} from 'react'
import './Base.css';
import './Home.css';
import geodataBanner from '../assets/images/members/banner.png';
import UpcomingEvents from '../components/UpcomingEvents.jsx';
export default function Home(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Home`;
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
        {/*<p> Our Organization </p>*/}
        <p> Find out about our mission, impact, and leadership structure. </p>
      </div>
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
