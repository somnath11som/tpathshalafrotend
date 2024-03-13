import React from 'react';
import { Global } from '@emotion/react';

const GlobalCss = () => {
	return (
		<Global
			styles={`
            html{
                overflow-x: hidden;
                overflow-y:scroll;
                background:white;
                scroll-behavior: smooth;
                font-family: 'Montserrat', sans-serif;
                user-select: none; 
                -webkit-user-select: none;
                scroll-behavior: smooth;
            }
            body, body.chakra-ui-light {
                background:white;
                scroll-behavior: smooth;
                font-family: 'Montserrat', sans-serif;
                margin-right:0 !important;
                padding:0 !important;
                -webkit-user-select: none; 
                -ms-user-select: none; 
                user-select: none; 
            }
            a,
            a:hover, button, button:hover, input[type="submit"],input[type="submit"]:hover] {
                transition: all 0.4s ease-in-out;
            }
            a.chakra-link:focus {
                box-shadow:none;
            }
            h1, h2, h3, h4, h5, h6 {
                font-family: 'Montserrat', sans-serif;
            }
        

            // media Query globally
            @media only screen and (max-width: 1023px) {

              }
            @media (min-width: 768px) and (max-width: 1023px) {

              }
            @media (min-width: 980px) and (max-width: 1023px) {
                
              }
            
            `}
		/>
	);
};

export default GlobalCss;
