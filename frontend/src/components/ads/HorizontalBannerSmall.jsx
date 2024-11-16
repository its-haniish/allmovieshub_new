import React, { useEffect } from 'react'

const HorizontalBannerSmall = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          atOptions = {
            key: "9d12847802f72d01b0cfbdee18685fa3",
            format: "iframe",
            height: 50,
            width: 320,
            params: {}
          };
        `;

        // Append the script to the ad div
        document.getElementById('horizontal_banner_small').appendChild(script);

        // Create script element for loading the ad
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = '//offspringthisscarcely.com/9d12847802f72d01b0cfbdee18685fa3/invoke.js';

        document.getElementById('horizontal_banner_small').appendChild(invokeScript);

        // Clean up when the component unmounts
        return () => {
            if (document.getElementById('horizontal_banner_small'))
                document.getElementById('horizontal_banner_small').innerHTML = '';
        };
    }, []);

    return (
        <>
            <div id='horizontal_banner_small'></div>
        </>
    )
}

export default HorizontalBannerSmall