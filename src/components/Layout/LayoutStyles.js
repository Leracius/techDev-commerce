import { styled } from "styled-components";

export const ContainerStyled = styled.form`
    width: 100%;
`
export const StyledImg = styled.img`
    height: 20px;
`
export const MenuBurguer = styled.div`
    display: flex;
    margin: 5px;
    padding: 5px;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 20px;
    border: 2px solid white;
    @media (max-width: 768px) {
        position: fixed;
        background-color: gray;
        top: 0;
        width: 100%;
        z-index: 10;
        padding-bottom: 50px;
        justify-content: center;
        align-items: center;
        margin: 0;
        border: none;
        padding: 10px 0 10px 0;
        border-bottom: 2px solid white;
        border-radius: 0;
    }
`

export const ElemContainer = styled.div`
    display: flex;
    


    margin: 10px;
    h1{
        font-size: 25px;
        margin: 5px;
        color: white;
    }
    form{
        display: flex;
    }
    p{
        color: white;
        font-weight: 700;
    }
`
export const HeaderStyled = styled.header`
    width: 100vw;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #0000005f;
    
`

export const FooterStyled = styled.footer`
    height: 100px;
    width: 100%;


`
export const FormContainer = styled.form`
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputStyled = styled.input`
    width: 400px;
    height: 50px;
    background-color: transparent;
    color: white;
    border: none;
    height: 30px;
    border-radius: 0;
    padding: 0 5px 0 5px;
    border-radius: 10px;
    border: 2px solid white;
    font-family: 'Space Grotesk', sans-serif;
    &:focus{
        outline: none;
    }
`
export const ButtonStyled = styled.button`
    padding: 5px;
    height: 100%;
    border: none;
    background-color: transparent;
    display: grid;
    align-items: center;
    justify-content: center;
`

export const MenuButton = styled.button`
    border: none;
    background-color: transparent;
`