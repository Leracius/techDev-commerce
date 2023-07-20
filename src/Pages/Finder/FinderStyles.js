import { styled } from "styled-components";
import { motion } from 'framer-motion';

export const FormContainer = styled.form`
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const InputContainer = styled.div`
    display: flex;
    position: absolute;
`

export const InputStyled = styled.input`
    width: 300px;
    font-size: 20px;

    background-color: #0000003d;
    color: white;
    border: none;
    padding: 0 5px 0 5px;
    border-radius: 15px;
    border: 4px solid white;
    font-family: 'Space Grotesk', sans-serif;

    @media (max-width: 768px) {
    /* Estilos con media queries para pantallas de hasta 768px */
    width: 100%;
    }
    &:focus{
        outline: none;
    }
    &::placeholder {
    color: white;
  }
`
export const ButtonStyled = styled.button`
    padding: 10px;
    height: 100%;
    border: none;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
`

export const StyledMotionDiv = styled(motion.div)`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img{
    width: 80%;
  }
`