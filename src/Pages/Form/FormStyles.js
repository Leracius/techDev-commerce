import { styled } from "styled-components";

export const Container = styled.div`
  height: 100%;
  form{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }
  button{
      padding: 10px;
      border: none;
      background-color: white;
      color: black;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      border-radius: 10px;
      cursor: pointer;
      &:hover{
        background-color: black;
        color: white;
        
      }
    }
  h1{
      margin: 3px;
      color: red;
      font-size: 10px;
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
  }
  h2{
    font-size: 24px;
  }

`


