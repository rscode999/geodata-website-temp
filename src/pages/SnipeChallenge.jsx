import {useState, useEffect} from 'react'
import snipes from "../components/Snipe Data.js";
import ProjectCard from "../components/ProjectCard.jsx";
export default function SnipeChallenge(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Snipe Challenge';
  });

  return(
    <div>
          <h1 className='titleHeader'>Snipes</h1>
      <div className = "member-cards">

        <div className= 'projectContainerRef' />
        <div>
          {/* Display the projects if there are projects. Otherwise, display "No projects" */}
          {snipes.length > 0 ?
              snipes.map(s => (
                  <ProjectCard
                      id={s.id}
                      team={"By: " + s.sniper}
                      title={s.title}
                      photo={s.photo}
                      description={s.description}
                  />
              ))
              :
              "No current projects"}
        </div>


      </div>
    </div>
  )
}
