import React, { useEffect } from 'react'
import useMobile from '../../hooks/useMobile';
const VeriticalBannerAdLong = () => {
    const isMobile = useMobile();

    useEffect(() => {
        // Create script element for the ad configuration
        if (isMobile) {
            return;
        }
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          atOptions = {
            key: "5f799423a6858bfda5191a87a6242c19",
            format: "iframe",
            height: 600,
            width: 160,
            params: {},
          };
        `;

        // Append the script to the ad div
        document.getElementById('vertical_banner_long').appendChild(script);

        // Create script element for loading the ad
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = '//offspringthisscarcely.com/5f799423a6858bfda5191a87a6242c19/invoke.js';

        document.getElementById('vertical_banner_long').appendChild(invokeScript);

        // Clean up when the component unmounts
        return () => {
            if (document.getElementById('vertical_banner_long'))
                document.getElementById('vertical_banner_long').innerHTML = '';
        };
    }, []);

    return (
        <>
            <div id='vertical_banner_long'></div>
        </>
    )
}

export default VeriticalBannerAdLong