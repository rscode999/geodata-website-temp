import './EventCard.css';
import '../pages/Base.css';
import {Link} from "react-router-dom";

export default function EventCard({title, date, description, linkText, linkDestination}) {
    return (
        <div className="event-card-flex-row">
            <div>
                <h2 className="event-card-header" style={{fontSize: "25pt"}}>{title}</h2>
            </div>

            <div className="event-card-flex-column">
                <p className='left-aligned-text-description' style={{fontWeight: "bold"}}>{date}</p>
                <p className='left-aligned-text-description'>{description}</p>
            </div>

            <Link to={linkDestination} className='link-button'>{linkText}</Link>
        </div>
    );
}