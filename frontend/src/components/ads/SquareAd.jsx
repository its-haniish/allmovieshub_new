import React, { useEffect } from 'react'
const SquareAd = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          atOptions = {
            key: "873d7f0d704aa05bcb1af655be9300da",
            format: "iframe",
            height: 250,
            width: 300,
            params: {}
          };
        `;

        // Append the script to the ad div
        document.getElementById('square_ad').appendChild(script);

        // Create script element for loading the ad
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = '//offspringthisscarcely.com/873d7f0d704aa05bcb1af655be9300da/invoke.js';

        document.getElementById('square_ad').appendChild(invokeScript);

        // Clean up when the component unmounts
        return () => {

            document.getElementById('square_ad').innerHTML = '';
        };
    }, []);

    return (
        <>
            <div id='square_ad'></div>
        </>
    )
}

export default SquareAd