import { useEffect, useState, useRef } from 'react';
import './Our Work.css'
import projectData from "../components/Project Data.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Our_Work() {
    useEffect(() => {
        document.title = `Our Work`;
    }, []);

    const teamContainerRef = useRef(null);

    return (
        <div>
            <h1 className='titleHeader'>Current and Past Projects</h1>
            <div className = "project-cards">

                <div className= 'projectContainerRef' />
                <div>
                    {/* Display the projects if there are projects. Otherwise, display "No projects" */}
                    {projectData.length > 0 ?
                        projectData.map(proj => (
                            <ProjectCard
                                id={proj.id}
                                team={proj.team}
                                title={proj.title}
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