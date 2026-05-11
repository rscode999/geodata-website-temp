import {useState, useEffect, useRef} from 'react'
import projectData from "../../components/Project Data.js";
import ProjectCard from "../../components/ProjectCard.jsx";
import teamMembers from "../../components/Member Data.js";
import MemberCard from "../../components/MemberCard.jsx";
import waterLogo from "../../assets/images/logos/water.jpg";

export default function Water(){
    const TEAM_NAME = "Water"

    useEffect(() => {
        document.title = 'Water';
    });

    //filters for team keyword
    function chooseTeam (teamMembers, keyword) {
        return ((teamMembers.filter(member => member.role.includes(keyword))))
    }

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
            <h1 className='titleHeader'>Water Team</h1>

            <img className='subteam-logo-image' src={waterLogo} alt='Water Team Logo'/>

            <p className='left-aligned-text'>The Water subteam does projects relating to streams and lakes. They are particularly interested in Cayuga Lake, the nearest large body of water to Cornell University.</p>
            <p className='left-aligned-text'>They deploy equipment such as buoys, depth sounders, and thermometers.</p>
            <p className='left-aligned-text'>Don't worry if you dislike swimming- the Water team will be happy to welcome you!</p>

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
