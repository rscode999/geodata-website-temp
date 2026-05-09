import { useState, useEffect, useRef } from 'react';
import './SlidingImage.css';

export default function SlidingImage({ src, alt, className = "", style = {} }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        // The observer checks if the element is in the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once it's visible, we stop observing to save resources
                    observer.unobserve(domRef.current);
                }
            },
            { threshold: 0.1 } // Triggers when 10% of the image is visible
        );

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`slide-container ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            <img src={src} alt={alt} className="sliding-img" style={style}/>
        </div>
    );
}