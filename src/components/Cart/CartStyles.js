import {styled} from "styled-components";
import { NavLink } from "react-router-dom"

export const Cartcontainer = styled.div`
    position: fixed;
    bottom: 60px;
    right: 20px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid white;
    padding: 10px;
    z-index: 200;
    @media (max-width: 768px) {
      margin: 0;
      border: none;
      bottom: 60px;
  }

    cursor: pointer;
    p{
        color: white;
    }
    h1{
        color: white;
    }
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: white;
    &:hover{
        scale: 1.1;
    }
`

export const CartBody = styled.div`
    border: 3px solid white;
    background-color: black;
    height: 90vh;
    position: absolute;
    bottom: -30px;
    right: -30px;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    z-index: 10;
    min-width: 300px;
    @media (max-width: 768px) {
        position: absolute;
        bottom: -10px;
        right: -20px;
        width: 100vw;
        height: 85vh;
        border: none;
        background-color: #282d38;

        h1{
            margin: 10px;
        }
    }
    h1{
        margin: 5px;
        font-size: 15px;
    }
`

export const DeleteAll = styled.div`
    cursor: pointer;
    &:hover{
        scale: 1.2;
    }
`

export const QuantityElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 10px;
    height: 10px;
    font-size: 10px;
    color: white;
    font-weight: 600;
    border: 2px solid white;
    padding: 3px;
    border-radius: 15px;
    background-color: red;

`
export const CartTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    @media (max-width: 768px) {
        justify-content: center;
    }
`

export const CartButtons = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1{
        color: white;
        font-size: 14px;
        margin: 2px;
    }
    button{
      padding: 10px;
      border: none;
      background-color: white;
      color: black;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      &:hover{
        background-color: black;
        color: white;
      }
      @media (max-width: 768px) {
        h1 {
      font-size: 14px;
        }
  }
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items:end;
    }
`
