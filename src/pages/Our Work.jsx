import { useEffect, useState, useRef } from 'react';
import './Our Work.css'
import projectData from "../components/Project Data.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Our_Work() {
    useEffect(() => {
        document.title = `Our Work`;
    }, []);

    const handleActivate = (memberId) => {
        setActiveCardId(prevId => (prevId === memberId ? null : memberId));
    };

    const [activeCardId, setActiveCardId] = useState(null);
    const teamContainerRef = useRef(null);

    return (
        <div onClick={(e) => {
            if (e.target === teamContainerRef.current) {
                setActiveCardId(null);
            }
        }}>
            <h1 className='titleHeader'>Current Projects</h1>
            <div className = "member-cards">
                <div className= 'teamContainerRef' >
                    {projectData
                        .map(proj => (
                            <ProjectCard
                                id={proj.id}
                                title={proj.title}
                                subteam={"Subteams: " + proj.subteam}
                                photo={proj.photo}
                                description={proj.description}
                                isActive={activeCardId === proj.id}
                                onActivate={handleActivate}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}