import { useEffect, useState, useRef } from 'react';
import MemberCard from '../components/MemberCard';
import teamMembers from '../components/Member Data'
import './Members.css'


export default function Members() {
  useEffect(() => {
    document.title = `Members`;
  }, []);

  const [activeCardId, setActiveCardId] = useState(null);
  const teamContainerRef = useRef(null);

  const handleActivate = (memberId) => {
    setActiveCardId(prevId => (prevId === memberId ? null : memberId));
  };

  // closes cards outside element
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (teamContainerRef.current && !teamContainerRef.current.contains(event.target)) {
        setActiveCardId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //filters for team keyword
  function chooseTeam (teamMembers, keyword) {
    return ((teamMembers.filter(member => member.role.includes(keyword))).sort(compareString))
  }


  //compare strings function. for displaying namecards
  function compareString (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <div onClick={(e) => {
          if (e.target === teamContainerRef.current) {
            setActiveCardId(null);
          }
        }}>
      <h1 className='titleHeader'>Members</h1>
      <div className = "member-cards">
      <h2 className = 'subheading'> Subteam Leads </h2>
        <div className= 'teamContainerRef' >
          {teamMembers
            .filter(member => member.role.includes('Lead'))
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
        <br/>
        <h2 className = 'subheading'> Data Team </h2>
        <div className= 'teamContainerRef' >
          {chooseTeam(teamMembers, 'Data').map(member => (
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
        <br/>
        <h2 className = 'subheading'> Rock Team </h2>
          <div className= 'teamContainerRef' >
            {chooseTeam(teamMembers, 'Rock').map(member => (
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
        <br/>
        <h2 className = 'subheading'> Water Team </h2>
        <div className= 'teamContainerRef'>
          {chooseTeam(teamMembers, 'Water').map(member => (
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
        <br/>
        <h2 className = 'subheading'> Air Team </h2>
        <div className= 'teamContainerRef'>
          {teamMembers
            .filter(member => member.role.includes('Air Team'))
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
        <br/>
        <h2 className = 'subheading'> Tech Team </h2>
        <div className= 'teamContainerRef' >
          {chooseTeam(teamMembers, 'Tech').map(member => (
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
        <br/>
        <h2 className = 'subheading'> Business Team </h2>
        <div className= 'teamContainerRef'>
          {chooseTeam(teamMembers, 'Business').map(member => (
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
    </div>
  );
}