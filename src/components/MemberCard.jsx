import { useState} from 'react';
import './MemberCard.css';

const MemberCard = ({ id, name, role, photo, bio, netid, coffee, isActive, onActivate }) => {
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

  //Conditional rendering of coffee chat button. Requires "coffee" to be true, and "netid" to be non-null or non-empty
  //Currently hard-coded to always render coffee chat button
  const coffeeChatButton = (true)//(coffee && netid)
      ? <p className = "member-card__contact"> <a href={`mailto:${netid ? `${netid}@cornell.edu` : ''}?subject=${encodeURIComponent('Coffee Chat Request')}&body=${encodeURIComponent(`Hello ${name || ''},\n\nI am interested in learning about GeoData! Would you be free sometime for a quick coffee chat?\n\nBest,\n[enter your name]`)}`}
                                                  className="member-card_coffee-chat">
          Coffee Chat </a> </p>
      : <p className = "member-card__contact">CU GeoData</p>; {/*placeholder for button*/}

  return (
    <div className = "member-card" {...eventHandlers}>
        <div className = "member-card__photo-wrapper">

          <img src={photo} alt = {`${name}'s profile`} className = "member-card__photo"/>
            <div className = {`member-card__overlay ${showOverlay ? 'is-active' : ' '}`}>
              {
                //Render the bio if it exists. Otherwise, put a default message
                bio
                ? <p className = "member-card__bio">{bio}</p>
                : <p className = "member-card__bio">I'm {name}! Nice to meet you!</p>
              }
            </div>
        </div>

      <div className = "member-card__content">
        <p className = "member-card__name">{name}</p>
        <p className = "member-card__role">{role}</p>

        {/*The coffee chat button is conditionally rendered*/}
        <p>{coffeeChatButton}</p>
      </div>
    </div>
  );
};

export default MemberCard;
