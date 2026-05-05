import { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ id, title, subteam, photo, description, isActive, onActivate }) => {
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

    const showOverlay = isActive || (!isTouchDevice && isHovered);

    return (
        <div className = "project-card" {...eventHandlers}>

            <div className = "project-card__content">
                <p className = "project-card__title">{title}</p>
                <p className = "project-card__subteam">{subteam}</p>
            </div>

            <div className = "project-card__photo-wrapper">

                <img src={photo} alt = {`${title}`} className = "project-card__photo"/>
                <div className = {`project-card__overlay ${showOverlay ? 'is-active' : ' '}`}>
                    {
                        //Render the project description if it exists. Otherwise, put a default message
                        description
                            ? <p className = "project-card__description">{description}</p>
                            : <p className = "project-card__description">{title}</p>
                    }
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;
