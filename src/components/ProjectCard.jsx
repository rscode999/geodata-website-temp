import { useState} from 'react';
import './ProjectCard.css';

const ProjectCard = ({ id, team, title, description, photo }) => {
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

            <div>
                <p className = "project-card__name">{title}</p>
                <p className = "project-card__team">{team}</p>
            </div>

            <div className = "project-card__photo-wrapper">
                <img src={photo} alt = {title} className = "project-card__photo"/>
            </div>

            <div>
                <p className = "project-card__description">{description}</p>
            </div>

        </div>
    );
};

export default ProjectCard;
