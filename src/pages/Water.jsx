import {useState, useEffect} from 'react'
import ProjectCard from '../components/ProjectCard';
import projects from '../components/Project Data'


export default function Water(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Water';
  });
    return (
        <div>
            <h1 className='titleHeader'>Water Team Projects</h1>
            <div className="project-card">
                <div className='project-card-container'>
                    {projects
                        .filter(project => project.team === 'Water')
                        .map(project => (
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                projectName={project.title}
                                description={project.description}
                                photo={project.photo}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
