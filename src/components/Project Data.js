import defaultPhoto from '../assets/images/projects/default_proj.png'
import reactAdventure from '../assets/images/projects/react_adventure.png'
import tethersonde from '../assets/images/projects/tethersonde.png'

const projects = [
    {
        id: 1,
        team: "Water",
        title: "Cayuga Lake Buoy",
        description: "We put a buoy in Cayuga Lake and collected data from it",
        photo: defaultPhoto
    },
    {
        id:2,
        team:"Air",
        title:"Tethersonde",
        description:"We attached some sensors to a tethersonde. Despite bad weather hampering our attempts, " +
            "we managed to launch our tethersonde to an altitude of 1000ft. For some of us, it was an enlightening " +
            "experience seeing nearly 2 years of work finally taking flight! That is, until a F-22 shot it down. " +
            "We are currently trying to find a replacement.",
        photo: tethersonde
    },
    {
        id:3,
        team:"Data",
        title:"Sensor Network Integration",
        description:"Fully automated data collection pipeline",
        photo: defaultPhoto
    },
    {
        id:4,
        team:"Business",
        title:"The Business Team ReactJS Adventure™️",
        description:"It all started when Data Team asked the Business Team to help out on the website. " +
            "There was only one problem: out of the 4 members on Business at the time, two of them have " +
            "absolutely no experience with coding. The other two have worked very little with React, " +
            "if at all. The Business team had so much F U N !!!! But hey, they're web devs now!",
        photo: reactAdventure
    }
]
export default projects;