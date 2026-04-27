import { useEffect, useState, useRef } from 'react';
import './Members.css'
import projectData from "../components/Project Data.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Our_Work() {
    useEffect(() => {
        document.title = `Our Work`;
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

    //generate all the filtered projects up front (so it knows which team cannot be displayed)
    // const airProjects = projectData.filter(proj => proj.team.includes('Air'));
    // const rockProjects = projectData.filter(proj => proj.team.includes('Rock'));
    // const waterProjects = projectData.filter(proj => proj.team.includes('Water'));
    // const dataProjects = projectData.filter(proj => proj.team.includes('Data'));
    // const techProjects = projectData.filter(proj => proj.team.includes('Tech'));
    // const businessProjects = projectData.filter(proj => proj.team.includes('Business'));


    return (
        <div onClick={(e) => {
            if (e.target === teamContainerRef.current) {
                setActiveCardId(null);
            }
        }}>
            <h1 className='titleHeader'>Current and Past Projects</h1>
            <div className = "member-cards">

                <div className= 'projectContainerRef' />
                <div>
                    {/* Display the projects if there are projects. Otherwise, display "No projects" */}
                    {projectData.length > 0 ?
                        projectData.map(proj => (
                            <ProjectCard
                                id={proj.id}
                                team={proj.team}
                                projectName={proj.projectName}
                                photo={proj.photo}
                                description={proj.description}
                            />
                        ))
                        :
                        "No current projects"}
                </div>


            </div>
        </div>
    );
}