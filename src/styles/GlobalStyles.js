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
    background-size: cover;
    background-image: url('https://res.cloudinary.com/dbo7lbynt/image/upload/v1698206961/assets-integrador/integrador-assets/herobg_staqlg.png');
    /* background: #0f0c29; 
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); 
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); */

}
` 