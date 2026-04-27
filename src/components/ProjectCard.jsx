import { useState} from 'react';
import './MemberCard.css';

const ProjectCard = ({ id, team, projectName, description, photo }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isTouchDevice = typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches;

    const eventHandlers = {};

    if (isTouchDevice) {
        eventHandlers.onTouchEnd = (e) => {
            e.preventDefault();
            onActivate(id);
        };
    } else {
        eventHandlers.onMouseEnter = () => setIsHovered(true);
        eventHandlers.onMouseLeave = () => setIsHovered(false);
    }

    return (
        <div className = "project-card" {...eventHandlers}>

            <div className = "member-card__content">
                <p className = "member-card__name">{projectName}</p>
                <p className = "member-card__role">{team}</p>
            </div>

            <div className = "project-card__photo-wrapper">
                <img src={photo} alt = {projectName} className = "project-card__photo"/>
            </div>

            <div>
                <p className = "project-card__description">{description}</p>
            </div>

        </div>
    );
};

export default ProjectCard;
