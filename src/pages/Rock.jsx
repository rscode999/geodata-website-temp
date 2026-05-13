import {useState, useEffect, useRef} from 'react'
import projectData from "../components/ProjectData.js";
import ProjectCard from "../components/ProjectCard.jsx";
import teamMembers from "../components/MemberData.js";
import MemberCard from "../components/MemberCard.jsx";
import rockLogo from "../assets/images/logos/rock.jpg";

export default function Rock(){
  const TEAM_NAME = "Rock";

  useEffect(() => {
    document.title = 'Rock';
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
        <h1 className='titleHeader'>Rock Team</h1>

        <img className='subteam-logo-image' src={rockLogo} alt='Rock Team Logo'/>

        <p className='center-aligned-text'>Rock Subteam is responsible for ground-based research. They often venture off campus to collect samples on weekends.</p>

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
                      role={member.role}
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
