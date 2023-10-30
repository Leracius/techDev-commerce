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
    background-position: center;
    background-repeat: no-repeat; 
    background-attachment: fixed;

}
` 