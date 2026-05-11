import {useState, useEffect, useRef} from 'react'
import projectData from "../../components/Project Data.js";
import ProjectCard from "../../components/ProjectCard.jsx";
import teamMembers from "../../components/Member Data.js";
import MemberCard from "../../components/MemberCard.jsx";
import {Link} from "react-router-dom";
import dataLogo from "../../assets/images/logos/data.jpeg";


export default function Rock(){
    const TEAM_NAME = "Data";

    useEffect(() => {
        document.title = 'Data';
    });

    const handleActivate = (memberId) => {
        setActiveCardId(prevId => (prevId === memberId ? null : memberId));
    };

    const [activeCardId, setActiveCardId] = useState(null);
    const teamContainerRef = useRef(null);

    const subteamProjectCards = projectData.filter(proj => proj.subteam.includes(TEAM_NAME))
        .map(proj => (
            <ProjectCard
                id={proj.id}
                title={proj.title}
                subteam={""}
                photo={proj.photo}
                description={proj.description}
                isActive={activeCardId === proj.id}
                onActivate={handleActivate}
            />
        ));


    return(
        <div onClick={(e) => {
            if (e.target === teamContainerRef.current) {
                setActiveCardId(null);
            }
        }}>
            <h1 className='titleHeader'>Data Team</h1>

            <img className='subteam-logo-image' src={dataLogo} alt='Data Team Logo'/>

            <p className='left-aligned-text-large-margin'>Data Subteam collects and displays the findings from other subteams. They're the subteam that created this website!</p>
            <p className='left-aligned-text-large-margin'>Their current lead, Rithya, *THINKS* she's cute, but is in fact delulu.</p>
            <Link to='/current-sensor-data' className='left-aligned-text-large-margin'>See our current sensor data here!</Link>

            <h2 className='subheading'>Current Projects</h2>
            <div className = "member-cards">
                <div className= 'teamContainerRef'>
                    {
                        (subteamProjectCards.length > 0)
                            ? subteamProjectCards
                            : <p>No current projects</p>
                    }
                </div>
            </div>

            <h2 className="subheading">Members</h2>
            <div className= 'teamContainerRef' >
                {teamMembers
                    .filter(member => member.role.includes(TEAM_NAME))
                    .map(member => (
                        <MemberCard
                            key={member.id}
                            id={member.id}
                            name={member.name}
                            role={member.role.replace(TEAM_NAME, "")}
                            photo={member.photo}
                            bio={member.bio}
                            netid={member.netid}
                            // linkedin
                            coffee={member.coffee}
                            isActive={activeCardId === member.id}
                            onActivate={handleActivate}
                        />
                    ))}
            </div>
        </div>
    )
}
