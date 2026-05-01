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
                                key={project.id}
                                projectName={project.title}
                                description={project.description}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
