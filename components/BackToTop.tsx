// BackToTop.tsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
    showAt?: number; // Scroll position at which to show the button
    smooth?: boolean; // Whether to use smooth scrolling
    className?: string; // Additional classes
}

const BackToTop: React.FC<BackToTopProps> = ({
                                                 showAt = 400,
                                                 smooth = true,
                                                 className = ''
                                             }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > showAt) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [showAt]);

    const scrollToTop = () => {
        if (smooth) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <>
            {isVisible && (
                <div
                    className={`backto-top ${className}`}
                    onClick={scrollToTop}
                    role="button"
                    tabIndex={0}
                    aria-label="Scroll to top"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        cursor: 'pointer'
                    }}
                >
                    <div>
                        <ArrowUp />
                    </div>
                </div>
            )}

            {/* Add default styles if not provided via CSS */}

        </>
    );
};

export default BackToTop;

//  <style jsx>{`
//         .backto-top {
//           position: fixed;
//           bottom: 30px;
//           right: 30px;
//           z-index: 999;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           background: var(--color-primary, #ff014f);
//           color: var(--color-white, #ffffff);
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
//         }
//
//         .backto-top:hover {
//           transform: translateY(-3px);
//           background: var(--color-primary-dark, #d6013f);
//         }
//
//         .backto-top div {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//       `}</style>
