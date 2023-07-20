import { styled } from "styled-components";

export const LoginContainer = styled.div`
    height: 30rem;
    width: 100vw;

    color: black;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: 768px) {
    /* Estilos con media queries para pantallas de hasta 768px */
      width: 100%;
      padding: 0;
    }
    @keyframes myAnim {
	0% {
		transform: translate(0);
	}

	20% {
		transform: translate(-2px, 2px);
	}

	40% {
		transform: translate(-2px, -2px);
	}

	60% {
		transform: translate(2px, 2px);
	}

	80% {
		transform: translate(2px, -2px);
	}

	100% {
		transform: translate(0);
	}
}
    h1{
      color: white;
      animation: myAnim 2s ease 0s normal forwards;
    }
    form{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 20px;
      background-color: #0000003d;
      border-radius: 15px;
      h1{
        margin: 3px;
        color: red;
        font-size: 10px;
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 0;
      }
    }
    button{
      width: 5rem;
      height: 2rem;
      margin: 5px;
      background-color: #0000003d;
      color: white;
      border: 3px solid white;
      border-radius: 10px;
      cursor: pointer;
      &:hover{
        background-color: transparent;
      }
    }

`
export const InputStyled = styled.input`
  border: 3px solid white;
  border-radius: 15px;
  padding: 5px;
  width: 300px;
  height: 35px;
  background-color: #0000003d;
  color: white;
  outline: none;
  font-size: 16px;
  &::placeholder {
    color: white;
  }

`;
