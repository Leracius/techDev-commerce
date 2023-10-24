import styled from "styled-components";

export const ContainerStyled = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 40px;
    padding-top: 100px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    img{
        border-radius: 20px;
    }
    h1{
        background-color: black;
        padding: 10px;
        border-radius: 20px;
        color: white;
    }
    p{
        color: white;
        text-align: center;
        font-size: 20px;
        margin: 10px;
    }
    button{
        background-color: #0000003d;
        border: none;
        padding: 10px;
        margin: 5px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            background-color: black;
        }
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const FloatBtn = styled.div`
    position: absolute;
    border: none;
    color: white;
    cursor: pointer;
    top: 80px;
    left: 20px;
    &:hover{
        scale: 1.4;
    }
`