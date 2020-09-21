import React from 'react';

function Icons(props) {
    switch (props.name) {
        default: 
            return("");
        case "info":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"/></svg>
            )
        case "logo":
            return(
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-menu-button-wide" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13zM14 7H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM2 6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2z"/>
                    <path fillRule="evenodd" d="M15 11H1v-1h14v1zM2 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-10a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                    <path d="M12.823 2.823l-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0z"/>
                </svg>
            )
        case "fb":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            )
        case "phone":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
            )
        case "email":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
            )
        case "main-logo":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="158.515" height="93.709" viewBox="0 0 158.515 93.709">
                <g id="Group_19" data-name="Group 19" transform="translate(-388.918 -5.175)">
                    <g id="Group_3" data-name="Group 3" transform="translate(391 15.954)">
                    <path id="Path_1" data-name="Path 1" d="M23.716,189.214a31.859,31.859,0,0,0,17.313,2.114,26.128,26.128,0,0,0,31.837.078,32.429,32.429,0,0,0,17.412-2.067,2.025,2.025,0,0,0,1.186-2.468,37.769,37.769,0,0,0-8.244-14.47c.048-.644.1-1.288.1-1.944A26.326,26.326,0,0,0,68.868,147a33.936,33.936,0,0,0-10.529-15.1,2.028,2.028,0,0,0-2.608-.006,33.928,33.928,0,0,0-10.617,15.113,26.326,26.326,0,0,0-14.433,23.45c0,.624.051,1.236.094,1.849a38.038,38.038,0,0,0-8.237,14.434A2.026,2.026,0,0,0,23.716,189.214ZM57,192.727a22.128,22.128,0,0,1-10.511-2.646,34.373,34.373,0,0,0,10.434-5.393,34.376,34.376,0,0,0,10.464,5.453A22.118,22.118,0,0,1,57,192.727Zm-8.258-26.641a33.581,33.581,0,0,1,16.441.022,30.4,30.4,0,0,1-8.25,13.272A30.415,30.415,0,0,1,48.742,166.086Zm38.24,20.144a26.175,26.175,0,0,1-10.111,1.431,26.26,26.26,0,0,0,5.411-9.962A34.786,34.786,0,0,1,86.983,186.231Zm-16.825-33.7a22.234,22.234,0,0,1,9.023,16.157A34.259,34.259,0,0,0,70,163.4a34.385,34.385,0,0,0,.544-6.111A32.99,32.99,0,0,0,70.158,152.531ZM69.033,167.37a30.04,30.04,0,0,1,9.942,6.536,22.223,22.223,0,0,1-7.186,13.157,30.223,30.223,0,0,1-11.723-5.078A34.477,34.477,0,0,0,69.033,167.37Zm-12-31.222a30.133,30.133,0,0,1,6.68,8.89,25.46,25.46,0,0,0-13.364-.013A30.348,30.348,0,0,1,57.028,136.148ZM48.5,149.882a22.171,22.171,0,0,1,17.009,0,28.606,28.606,0,0,1,.98,7.4,30.492,30.492,0,0,1-.392,4.875,37.181,37.181,0,0,0-18.256-.026,30.5,30.5,0,0,1-.374-4.763A28.162,28.162,0,0,1,48.5,149.882Zm5.289,32.09a30.215,30.215,0,0,1-11.663,5.012,22.216,22.216,0,0,1-7.114-13.166,29.557,29.557,0,0,1,9.878-6.481A34.466,34.466,0,0,0,53.79,181.972Zm-9.978-29.417a33,33,0,0,0-.391,4.816,34.37,34.37,0,0,0,.522,5.988,33.841,33.841,0,0,0-9.116,5.228A22.236,22.236,0,0,1,43.811,152.555ZM31.7,177.632a26.257,26.257,0,0,0,5.352,9.946,25.468,25.468,0,0,1-10.029-1.462A35.336,35.336,0,0,1,31.7,177.632Z" transform="translate(-22.449 -131.423)" fill="#8566aa" stroke="#8566aa" stroke-miterlimit="10" stroke-width="4"/>
                    </g>
                    <g id="Group_4" data-name="Group 4" transform="translate(418.23 5.667)">
                    <path id="Path_2" data-name="Path 2" d="M121.241,105.043c-.172.089-.371.192-.439.233a2.518,2.518,0,0,1-.515.151c-.453.089-.824.3-.824.46a.9.9,0,0,0,.137.343l.131.219-.288.083a1.436,1.436,0,0,1-.789-.034,1.822,1.822,0,0,0-1.229-.007.614.614,0,0,0-.13.755c.158.24.46.219,1.1-.076a4.3,4.3,0,0,1,1.318-.439c.11,0,.172.075.261.3.1.268.1.316.014.5a.691.691,0,0,1-.583.425c-.227.041-.254.069-.274.267-.028.254-.041.254-.378.117a1.59,1.59,0,0,0-1.1,0,2.776,2.776,0,0,0-1.263,2.025c-.069.721.233.81.988.3.927-.625,1.51-.844,1.716-.638.055.055.048.124-.034.261-.267.466.186.576.556.137.247-.3.391-.309.391-.034,0,.247-.329.494-.789.583a2.642,2.642,0,0,0-2.21,1.922c-.027.178,0,.281.069.343.089.069.172.027.528-.3.672-.618,1.345-.858,1.812-.645.124.062.172.144.192.343.02.254.014.267-.158.267-.151,0-.24.083-.494.474-.288.425-.343.474-.645.549-.83.213-1.6.83-1.6,1.3,0,.227.007.233.206.192a4.566,4.566,0,0,0,.906-.487c.672-.432.714-.446,1.132-.446.24,0,.432.027.432.062a.622.622,0,0,1-.391.563,1.66,1.66,0,0,0-.466.275,1.551,1.551,0,0,1-.714.3,1.708,1.708,0,0,0-1.386.871c-.151.288-.172.672-.048.8.213.213.816.041,1.6-.466.508-.323.762-.412.7-.24a.661.661,0,0,0-.048.137,1.34,1.34,0,0,1-.309.165,5.421,5.421,0,0,0-.707.411,6.723,6.723,0,0,1-1.036.556c-.8.336-.968.487-.968.83a.477.477,0,0,0,.22.439c.192.165.267.185.6.158a1.867,1.867,0,0,0,.926-.35,1.545,1.545,0,0,1,1.324-.281c.357.069.2.227-.213.213-.309-.014-.48.041-1.249.411-1.229.583-1.345.611-1.915.474a2.817,2.817,0,0,0-2.464.556c-.487.521-.3,1.256.322,1.256a4.546,4.546,0,0,0,2.155-.851c.659-.466,1.647-.837,1.812-.672.083.083-.865.727-1.482,1.016-1.414.652-2.937,1.016-3.184.769-.144-.144-.309.1-.343.515-.048.638.144.8.666.528a4.942,4.942,0,0,1,2.375-.425c.1.055.075.076-.144.11-.336.069-.693.281-.748.46a.981.981,0,0,0,0,.4c.089.521-.1.686-.789.686a2.19,2.19,0,0,0-.6.075,4.8,4.8,0,0,1-.83.137c-.727.062-.982.158-1.071.411-.144.412.165,1.023.521,1.023a2.742,2.742,0,0,0,.666-.24,5.339,5.339,0,0,1,.542-.24c.02,0-.041.089-.144.192a.708.708,0,0,0-.1,1.029,1.613,1.613,0,0,0,.364.178c.144.055.213.1.151.1a3.43,3.43,0,0,0-1.42.721,4.178,4.178,0,0,1-.755.521.7.7,0,0,0-.446.419c-.254.625-.2,1.091.124,1.091a1.786,1.786,0,0,0,.858-.583c.082-.11.151-.178.165-.165a3.637,3.637,0,0,1,.6,1.366c0,.322-.11.453-.46.542a3.556,3.556,0,0,0-2.011,2.313.419.419,0,0,0,.4.439c.117,0,.151.027.117.11a7.693,7.693,0,0,0-.474,2.279.539.539,0,0,1-.137.371c-.446.6-.522,1.125-.213,1.489.371.439.83.206,1.05-.528.144-.48.309-.769.432-.769a4.726,4.726,0,0,1-.172,1.922,1.648,1.648,0,0,1-.549,1.036c-.844.865-1.05,2.464-.316,2.464.233,0,.576-.377.679-.741a1.454,1.454,0,0,1,.652-.885c.4-.227.48-.124.48.686,0,.776-.172,1.379-.439,1.544a2.843,2.843,0,0,0-.35.261.865.865,0,0,1-.309.178c-.11.02-.137.082-.144.329a4.482,4.482,0,0,1-.164.892,2.817,2.817,0,0,0-.028,1.928c.275.268.542-.034.824-.913.151-.5.364-.721.576-.6a.556.556,0,0,0,.316.041c.144-.041.164-.021.164.144a8.205,8.205,0,0,1-.659,2.388,2.524,2.524,0,0,0-.377,1.77c.089.4.3.735.446.735.185,0,.371-.35.487-.913.027-.144.062-.178.124-.137a2.18,2.18,0,0,0,.419.185.605.605,0,0,1,.425.357c.137.33.124.46-.083.652a3.017,3.017,0,0,0-.713,2.066c0,.713.233.926.618.549l.192-.192.467.158c.611.206.851.425.988.927.055.164.028.233-.206.5a1.763,1.763,0,0,0-.467,1.4.994.994,0,0,0,.151.618c.233.261.515.172.8-.254.1-.137.123-.144.377-.075a1.753,1.753,0,0,0,1.263-.206c.453-.233.577-.2.666.158.041.178.034.192-.082.144-.48-.2-.906-.048-1.421.508-.679.741-.851,1.386-.521,2.025a1.623,1.623,0,0,0,.343.474c.165.117.2.124.385.027a3.533,3.533,0,0,0,.6-.556,3.2,3.2,0,0,1,.446-.453,2.121,2.121,0,0,1,.542.865,1.017,1.017,0,0,0,.185.371c.11.089-.014.2-.823.727-.906.59-1.208,1.208-.817,1.668.309.371.727.24,1.228-.364.138-.172.3-.316.357-.316a3.33,3.33,0,0,1,.982.954.568.568,0,0,0,.11.267c.062.089.1.172.075.192a6.6,6.6,0,0,1-1.4.433c-1.565.336-1.942.892-1.173,1.681a1.566,1.566,0,0,0,.638.446,2.57,2.57,0,0,0,1.318-.027c.309-.131.295-.131.295.069,0,.151-.027.172-.254.172a3.189,3.189,0,0,0-1.97.755c-.254.309-.226.535.117,1,.776,1.05,1.585,1.373,2.285.892a.868.868,0,0,1,.913-.083,1.651,1.651,0,0,1,.693.817v.151l-1.544-.021c-1.757-.027-2.217.034-2.436.309-.2.254-.172.535.1,1.084.563,1.16,1.352,1.373,2.278.618a.855.855,0,0,1,.494-.24c.309,0,.357.11.261.549-.082.364-.089.377-.528.6a2.841,2.841,0,0,1-1.16.3c-.988.1-1,.11-1,1.146,0,.679.021.837.137,1.036.281.48.7.425,1.654-.213a1.823,1.823,0,0,1,.57-.3,1.184,1.184,0,0,1-.069.5,3.3,3.3,0,0,0-.131.741c0,.268-.007.275-.4.433a3.671,3.671,0,0,1-1.558.357c-.57,0-.727.082-.94.5a3.134,3.134,0,0,0-.329,1.4c0,.35.027.46.164.611.151.178.178.185.425.11a3.453,3.453,0,0,0,.844-.549l.577-.474.227.144a.73.73,0,0,1,.233.206c.007.158-.789.824-1.215,1.023a2.541,2.541,0,0,1-1.153.247,2.119,2.119,0,0,0-.81.138c-.089.069-.117.213-.117.659,0,.549-.007.576-.206.741a2.943,2.943,0,0,1-.7.357c-1.5.569-1.7.789-1.771,1.956a2.148,2.148,0,0,1-.549,1.544c-.371.487-.377.57-.165,1.284a4.55,4.55,0,0,1,.192,1.5c.014,1.084.083,1.27,1.016,2.69.391.6.906,1.393,1.153,1.777.6.947,1.023,1.379,1.53,1.565.81.3,1.16.11.81-.439-.076-.117-.433-.549-.8-.961-1.235-1.414-1.565-2.038-1.558-2.985a3.481,3.481,0,0,1,1.572-3.136,9.995,9.995,0,0,1,1.359-.5c2.491-.741,3.816-1.3,4.468-1.867.4-.357.46-.528.4-1.3l-.048-.68h1.18l.323-.357c.185-.2.515-.549.734-.789a1.607,1.607,0,0,0,.364-.474c-.027-.027.02-.123.089-.219a.6.6,0,0,0,.137-.261,3.018,3.018,0,0,1,.371-.6,3.911,3.911,0,0,0,.412-.686,2.441,2.441,0,0,1,.254-.515.766.766,0,0,0,.178-.624c-.027-.233.014-.378.268-.892a8.2,8.2,0,0,1,.432-.8,1.6,1.6,0,0,0,.172-.673c.027-.267.11-.83.178-1.263.164-.94.164-1.077.027-1.345-.158-.3-.048-1.407.144-1.407.24,0,.274-.2.247-1.468-.021-1.311-.083-1.64-.336-1.716-.124-.041-.144-.124-.172-.748-.02-.385-.034-1.029-.034-1.428a1.852,1.852,0,0,0-.172-1.064,2.7,2.7,0,0,1-.206-.576c-.062-.385-.178-.632-.322-.666-.089-.027-.172-.158-.254-.4-.1-.316-.1-.391-.021-.542a.363.363,0,0,0,.007-.4c-.048-.124-.206-.577-.357-1.009s-.309-.844-.35-.926c-.124-.24-.419-.515-.549-.515-.151,0-.535-.789-.535-1.1a5.914,5.914,0,0,0-.652-1.626,1.763,1.763,0,0,0-.412-.611,1.418,1.418,0,0,1-.494-1.029,1.217,1.217,0,0,0-.2-.714,3.612,3.612,0,0,0-.892-1.318,1.776,1.776,0,0,1-.432-.7,4.564,4.564,0,0,1-.281-.714.571.571,0,0,0-.062-.206,2.731,2.731,0,0,1-.185-.487,1.517,1.517,0,0,0-.419-.679,2.665,2.665,0,0,1-.679-1.407,8.434,8.434,0,0,0-.913-2.484,4.829,4.829,0,0,1-.453-1.578,1.752,1.752,0,0,0-.158-.666,1.843,1.843,0,0,1-.151-.412.589.589,0,0,0-.11-.254c-.082-.11-.089-.171-.041-.206s.048-.165-.014-.453a9.359,9.359,0,0,1-.137-1.338c-.062-1.215-.089-1.366-.281-1.441-.144-.055-.158-.124-.206-.7a3.316,3.316,0,0,0-.1-.707,5.691,5.691,0,0,1-.082-1.009,2.534,2.534,0,0,0-.144-1.112c-.164-.247-.151-.439.034-.467a.255.255,0,0,0,.2-.206,9.085,9.085,0,0,0,0-2.031c-.089-.165.028-.631.158-.631s.3-.213.4-.488a1.05,1.05,0,0,1,.247-.391.317.317,0,0,0,.117-.377c-.165-.714-.158-.872.048-1.242a6.415,6.415,0,0,1,.364-.57,3.055,3.055,0,0,0,.309-1.338,1.776,1.776,0,0,1,.288-.755c.158-.275.371-.7.487-.947a2.4,2.4,0,0,1,.474-.7c.178-.172.261-.3.233-.364a.977.977,0,0,1,.2-.487,4.934,4.934,0,0,0,.446-1.016c.192-.6.357-.865.535-.865.144,0,.089-.1-.117-.226l-.206-.117.185-.309c.1-.165.24-.316.309-.33.151-.048.384-.563.391-.865a1.665,1.665,0,0,1,.309-.727,3,3,0,0,0,.3-.556.716.716,0,0,1,.062-.254,2.585,2.585,0,0,0,.082-.734,1.982,1.982,0,0,0-.343-1.222c-.329-.666-.762-1.18-.988-1.18-.048,0-.178.124-.281.274s-.206.261-.219.247a.783.783,0,0,1,.014-.274c.048-.247.364-.659.508-.659.041,0,.137.124.213.274a.769.769,0,0,0,.3.336c.247.1.425.35.666.947a2.389,2.389,0,0,0,.267.569,1.755,1.755,0,0,0,.268-.377l.227-.377-.014-.844c-.02-.769-.007-.872.131-1.084a1.37,1.37,0,0,0,.151-.789v-2.354a6.527,6.527,0,0,1,.117-2.025,2.015,2.015,0,0,0-.041-1.427,1.588,1.588,0,0,1-.144-.693c0-.288-.028-.4-.1-.432s-.1-.144-.1-.385a.727.727,0,0,1,.172-.549c.206-.247.206-.274.028-.672a1.418,1.418,0,0,0-.625-.727A.765.765,0,0,0,121.241,105.043Zm-.138,4.749a.173.173,0,0,1,0,.089c-.014.034-.137.007-.267-.069l-.24-.137.24.048A1.031,1.031,0,0,1,121.1,109.792Zm.144,1.949c0,.089-.041.11-.178.082a.407.407,0,0,0-.35.13l-.178.165.048-.275a5.077,5.077,0,0,1,.124-.515l.075-.233.227.267A.934.934,0,0,1,121.248,111.741Zm-.02,1.318c-.021.055-.041.034-.041-.041s.014-.117.034-.089A.138.138,0,0,1,121.228,113.059Zm-.412.741a.632.632,0,0,0,.288.137c.076,0,.144.1.186.275.1.336.048.391-.124.172-.247-.316-.384-.343-.618-.124l-.206.192.048-.343C120.459,113.6,120.514,113.559,120.816,113.8Zm-.652,4.234a.442.442,0,0,1,.124.288.638.638,0,0,0,.1.322,17.116,17.116,0,0,1,.707,1.675c.021.055-.034.014-.123-.089a2.171,2.171,0,0,0-.508-.377c-.288-.158-.35-.22-.364-.4a.346.346,0,0,1,.158-.357c.378-.3.007-.6-.48-.4a.714.714,0,0,1-.288.082c-.02-.02.014-.117.076-.227s.158-.3.219-.419C119.917,117.89,119.985,117.869,120.164,118.034Zm-.8,2.017c-.11.2-.1.227.131.769.316.748.453,1.091.453,1.119a2.4,2.4,0,0,1-.693-.46c-.24-.192-.35-.247-.494-.219-.1.02-.185.014-.185-.021s.13-.357.288-.727c.247-.569.316-.672.453-.672S119.464,119.846,119.361,120.051Zm-2.4,2.045c.041.069-.172.213-.309.213-.055,0-.055-.041,0-.137C116.725,122.028,116.89,121.987,116.959,122.1Zm.885.138a.423.423,0,0,1-.055.254c-.13.233-.062.377.3.632.227.158.824,1.043.707,1.043a5.658,5.658,0,0,1-.535-.275,2.511,2.511,0,0,0-.638-.274c-.158,0-.494-.364-.494-.535a.909.909,0,0,1,.364-.755C117.748,122.159,117.8,122.151,117.844,122.234Zm-1.489,2.429c.138.124.144.151.062.316-.24.48-.13.837.3.933.144.034.3.172.549.522l.343.474-.467-.254a3.6,3.6,0,0,1-.583-.378c-.1-.1-.192-.117-.638-.075l-.522.041.048-.233a6.55,6.55,0,0,1,.419-1.469C115.991,124.354,116,124.354,116.355,124.663Zm-1.16.776c-.028.178-.261.2-.577.055l-.267-.117.322-.048a1.069,1.069,0,0,0,.371-.089C115.127,125.164,115.222,125.3,115.2,125.439Zm.165,1.99a.8.8,0,0,1-.069.364c-.158.5-.089.652.412.906.391.2.666.425.673.569,0,.034-.069.007-.151-.055a3.272,3.272,0,0,0-.926-.453,1.474,1.474,0,0,1-.48-.247c-.4-.275-.4-.213-.041-.837.137-.227.213-.288.357-.288A.483.483,0,0,1,115.36,127.429Zm-1,.316c-.055.164-.082.192-.1.1-.034-.158.028-.322.117-.322C114.42,127.525,114.413,127.614,114.365,127.745Zm-1.386.871c.343.357.165.385-.254.034a2.953,2.953,0,0,0-.453-.323c-.151-.069-.151-.082-.034-.123Q112.484,128.112,112.978,128.616Zm1.1,1.428c.137.288.24.9.151.927a5.021,5.021,0,0,0,.748.638c1.057.817,1.05.81.879.755a5.6,5.6,0,0,0-1.565-.3c-1.029-.076-1.023-.055-.748-1.091a3.826,3.826,0,0,1,.385-1.18A1.1,1.1,0,0,1,114.083,130.044Zm-1,3.637a1.071,1.071,0,0,0,.1.514.726.726,0,0,0,.652.227c.13-.02.391.082,1,.412l.824.446-.652-.034a7.568,7.568,0,0,1-.933-.11.548.548,0,0,0-.5.041.643.643,0,0,0-.254.2c-.027.082-.1.082-.384.007a2.986,2.986,0,0,1-.371-.124,11.6,11.6,0,0,1,.467-1.97A.792.792,0,0,1,113.081,133.681Zm-.357,3.143a1.549,1.549,0,0,1,.384.494c.082.371.261.48,1.626.982.734.274,1.379.522,1.434.549a3.077,3.077,0,0,1-.995.062,8.411,8.411,0,0,0-1.332.069,1.134,1.134,0,0,1-.652-.027c-.233-.055-.556-.124-.727-.158l-.309-.055-.055-.4c-.1-.755.028-1.819.22-1.819A1.9,1.9,0,0,1,112.725,136.824Zm-.007,3.473c.309.192,1.07,1.1.988,1.18a.357.357,0,0,0,0,.274.554.554,0,0,1,.041.227c-.007.007-1.009.075-1.009.062s-.075-.384-.172-.858C112.333,140.015,112.326,140.056,112.718,140.3Zm1.077,3.733a1.457,1.457,0,0,0,.391.275c.069.027.13.069.13.1a1.143,1.143,0,0,0,.213.309c.151.172.185.24.11.24a.177.177,0,0,0-.151.069,4.875,4.875,0,0,0,.288,1.139c.055.144-.316.124-.762-.048-.357-.13-.384-.158-.514-.5a7.446,7.446,0,0,1-.385-1.428c-.034-.267-.02-.322.083-.35C113.459,143.769,113.541,143.8,113.8,144.03Zm.83,3.74a4.867,4.867,0,0,0,1.462.686c.158,0,.02.123-.2.172s-.233.014.069.789a1.38,1.38,0,0,0,.261.5c.027-.007.11-.034.178-.062.117-.041.124-.035.041.1-.213.336-.913.083-1.167-.425a19.038,19.038,0,0,1-.9-1.97A1.294,1.294,0,0,1,114.625,147.77Zm2.169,3.815c.316.048.494.144.439.233a2.882,2.882,0,0,0,.274.714c.206.453.281.672.22.693a1.666,1.666,0,0,1-.727.048c-.227-.048-.24-.076-.563-.94-.186-.494-.336-.913-.336-.947s.089-.007.2.048A1.82,1.82,0,0,0,116.794,151.586Zm.762,2.992c.378.549.666.741,1.077.741h.323l.2.46c.117.254.22.488.227.515s-.151.055-.364.055c-.364,0-.4-.02-.727-.322a3.674,3.674,0,0,1-.57-.707,3.441,3.441,0,0,1-.522-1.167A1.8,1.8,0,0,1,117.556,154.578Zm2.45,3.589a1.333,1.333,0,0,0,.35.357,1.806,1.806,0,0,1,.487.762c.275.611.288.659.192.83-.185.322-.309.261-.466-.233a2.553,2.553,0,0,0-.59-1.064,2.157,2.157,0,0,1-.316-.371c-.151-.206-.178-.288-.124-.391C119.642,157.858,119.821,157.9,120.006,158.167Zm1.3,3.6a1.643,1.643,0,0,1,.391.281,1.578,1.578,0,0,0,.316.247.581.581,0,0,1,.267.4.622.622,0,0,1-.02.556c-.1.2-.151.233-.343.233a1.613,1.613,0,0,1-.666-.165c0-.014-.062-.357-.137-.769C120.918,161.5,120.9,161.564,121.3,161.763Zm.865,2.958c.117.041.247.206.377.473a2,2,0,0,0,.378.535c.13.11.172.206.185.5.02.35.014.371-.2.467a.635.635,0,0,0-.261.233.166.166,0,0,1-.144.124,1.42,1.42,0,0,1-.851-.632l-.213-.33.11-.432a3.617,3.617,0,0,0,.11-.721c0-.261.014-.288.164-.288A1.015,1.015,0,0,1,122.168,164.721Zm.364,3.857a1.592,1.592,0,0,1,.158.425,1.591,1.591,0,0,0,.261.529c.151.185.165.24.117.659-.041.391-.075.48-.281.679-.226.227-.24.233-.46.137a2.217,2.217,0,0,1-1.036-1.777l-.041-.529h.3a1.227,1.227,0,0,0,.46-.1C122.216,168.475,122.449,168.468,122.531,168.578Zm-.514,3.878a1.665,1.665,0,0,1,.4.721,1.214,1.214,0,0,0,.138.357c.13.261.13.267-.007.528-.11.227-.164.268-.357.268a.733.733,0,0,0-.364.1c-.13.089-.158.082-.316-.089-.288-.309-.329-.453-.329-1.173,0-.632.014-.693.151-.789A.491.491,0,0,1,122.017,172.455Zm-1.119,3.465c.027.089.075.247.1.357.041.178.034.192-.062.11s-.172-.014-.618.453l-.508.542-.137-.172c-.247-.309-.227-.384.192-.645a4.324,4.324,0,0,0,.659-.514,2.676,2.676,0,0,1,.288-.281C120.829,175.77,120.864,175.839,120.9,175.921Z" transform="translate(-109.161 -104.885)" fill="#fff" stroke="#8ec6c5" stroke-miterlimit="10" stroke-width="1"/>
                    </g>
                    <g id="Group_2" data-name="Group 2" transform="translate(461.777 7.876)">
                    <text id="Mind" transform="translate(6.174 29)" fill="#fff" font-size="38" font-family="SitkaBanner-Bold, Sitka Banner" font-weight="700" letter-spacing="-0.027em"><tspan x="0" y="0">Mind</tspan></text>
                    <text id="Body" transform="translate(0 55.716)" fill="#fff" font-size="37" font-family="SitkaBanner-Bold, Sitka Banner" font-weight="700" letter-spacing="-0.025em"><tspan x="0" y="0">Body</tspan></text>
                    <text id="_" data-name="&amp;" transform="translate(8.386 81.732)" fill="#fff" font-size="22" font-family="SitkaBanner-Bold, Sitka Banner" font-weight="700" letter-spacing="0.052em"><tspan x="0" y="0">&amp;</tspan></text>
                    <text id="Soul" transform="translate(24.655 82.008)" fill="#fff" font-size="37" font-family="SitkaBanner-Bold, Sitka Banner" font-weight="700" letter-spacing="-0.054em"><tspan x="0" y="0">Soul</tspan></text>
                    </g>
                </g>
                </svg>

            )
    }
}

export default Icons;