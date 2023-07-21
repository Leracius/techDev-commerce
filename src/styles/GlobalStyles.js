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
    background-color: #282d38;

}
` 