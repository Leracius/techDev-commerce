import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`
export const SidesContainer = styled.div`
    border-radius: 30px;
    padding: 10px;
    background-color: #0000003d;
    display: flex;
    margin: 20px;
    flex-direction: column;
    width: 360px;
    height: 450px;
    @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
    }
    h1{
        font-size: 20px;
        margin: 10px;
        color: white ;
    }
    h2{
        font-size: 15px;
        color: white;
    }
`
export const StyledCheck = styled(SidesContainer)`
  /* box-shadow: 3px 1px 49px -20px #6667ab; */
`

export const CartContainer = styled.div`
  
  width: 360px;
  height: 80%;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
        background-color: transparent;
        width: 10px;
    }
  &::-webkit-scrollbar-thumb {
        background-color: #0000003d;
    }
`

export const CartProduct = styled.div`
    margin: 10px;
    width: 90%;
    padding: 5px 0 5px 0;
    border-radius: 10px;
    background-color: #0000003d;
    display: flex;
    justify-content: space-between;
`
export const ElContainer = styled.div`
    height: 100%;
    width: 50%;
    color: black;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    p{
      margin-top: 10px;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }
    h2{
      text-align: center;
      font-size: 18px;
      color: #00D14D;
    } 
    button{
      padding: 5px 20px 5px 20px;
      border: none;
      background-color:  #6667ab;
      color: white;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      margin: 10px;
    }
    div{
      display: flex;
      align-items: center;
    }
    img{
      border-radius: 20px;
    }
`
