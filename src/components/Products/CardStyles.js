import { styled } from "styled-components"; 

export const CardContainer = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px 10px 10px;
    border-radius: 20px;
    background-color: #0000003d;
    img{
        border-radius: 10px;
        opacity: 0.8;
    }
    button{
        &:hover{
        background-color: black;
        scale: 1.1;
    }
    }
    p{
        color: white;
        margin-top: 10px;
    }

`
export const ButtonContainer = styled.div`
    button{
        border: none;
        margin: 10px;
        padding: 5px 20px;
        color: white;
        background-color: #0000003d;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
    }
`
export const PStyled = styled.p`
    color: white;
    font-weight: 600;
`

export const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const TittleStyled = styled.h1`
    background-color: white;
    text-align: center;
    color:#6667ab;
    padding: 5px 0 5px 0;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`