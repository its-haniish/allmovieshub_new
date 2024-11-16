import React, { useEffect } from 'react'

const VeriticalBannerAdShort = () => {

    useEffect(() => {

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          atOptions = {
            key: "266d5c6f74c869bcc68cc573f407c266",
            format: "iframe",
            height: 300,
            width: 160,
            params: {}
          };
        `;

        // Append the script to the ad div
        document.getElementById('vertical_banner_short').appendChild(script);

        // Create script element for loading the ad
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = '//offspringthisscarcely.com/266d5c6f74c869bcc68cc573f407c266/invoke.js';

        document.getElementById('vertical_banner_short').appendChild(invokeScript);

        // Clean up when the component unmounts
        return () => {
            if (document.getElementById('vertical_banner_short')) {
                document.getElementById('vertical_banner_short').innerHTML = '';
            }
        };
    }, []);

    return (
        <>
            <div id='vertical_banner_short'></div>
        </>
    )
}

export default VeriticalBannerAdShort