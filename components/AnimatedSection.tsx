import React, { useEffect, useRef, useState } from 'react';

// Fix: Added the `style` prop to `AnimatedSectionProps` to allow passing inline styles for animations, which was causing a type error in `pages/Transformations.tsx`.
interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, rootMargin: string = '0px'): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    if(ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isIntersecting;
};


const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, style }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(ref, '-100px');

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;