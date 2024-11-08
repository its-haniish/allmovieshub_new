import { useState, useEffect } from 'react';

// Hook to detect if the device is mobile
const useMobile = (breakpoint = 768) => { // Default breakpoint
    // Initialize isMobile based on the initial window size (if available)
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' && window.innerWidth <= breakpoint
    );

    useEffect(() => {
        if (typeof window === 'undefined') return; // Exit if on server

        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        // Update the state based on the current window size
        setIsMobile(mediaQuery.matches);

        const handleMediaChange = (e) => {
            console.log("Media change detected:", e.matches); // Debugging
            setIsMobile(e.matches);
        };

        // Add the media query event listener (with fallback)
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleMediaChange);
        } else {
            mediaQuery.addListener(handleMediaChange); // Fallback for older browsers
        }

        // Cleanup event listener on unmount
        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleMediaChange);
            } else {
                mediaQuery.removeListener(handleMediaChange); // Fallback for older browsers
            }
        };
    }, [breakpoint]);

    return isMobile;
};

export default useMobile;
