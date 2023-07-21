import { styled } from "styled-components";
import { motion } from 'framer-motion';

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 100px) ;
    @media (max-width: 768px) {
      background-image: url('https://res.cloudinary.com/dbo7lbynt/image/upload/v1689910841/background-mobile-home_q8ta5d.png');
      height: 100vh;
      background-size: contain;
      background-repeat: no-repeat;
      align-items: start;
      margin-top: 120px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    position: absolute;
    top: 40%;
    @media (max-width: 768px) {
      top: 90px;
    }
    
    
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
  img{
    width: 80%;
  }
`