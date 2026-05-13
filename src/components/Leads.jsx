import { useEffect, useState, useRef } from 'react';
import MemberCard from '../components/MemberCard';
import teamMembers from './MemberData.js'
import './Members.css'

//THIS WHOLE PAGE IS UNTESTED!!!
export default function Leads() {
    useEffect(() => {
        document.title = `Team Leads`;
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

    //THIS IS UNTESTED!!!
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

            </div>
        </div>
    );
}