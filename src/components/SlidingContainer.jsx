import { useState, useEffect, useRef } from 'react';
import './SlidingContainer.css';

/**
 * Any component in a `SlidingContainer`, upon rendering, will slide to the left or right.
 * Slides from the right for `direction`="right" and from the left for `direction`="left" (or anything that's not "right").
 */
export default function SlidingContainer({ children, direction = 'left', className = "" }) {
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

    // Determine which CSS class to use based on the direction prop
    const directionClass = direction === 'right' ? 'slide-right-container' : 'slide-left-container';

    return (
        <div
            ref={domRef}
            className={`${directionClass} ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
}