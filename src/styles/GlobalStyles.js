import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
*{ 
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif;

}
body {
    overflow-x: hidden;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
` 