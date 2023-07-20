import { styled } from "styled-components";
import { motion } from "framer-motion";

export const CategorieContainer = styled.div`
    background-color: #0000003d;
    width: 100%;
    display: flex;
    justify-content: left;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        color:  white;
        font-weight: 600;
        font-size: 16px;
        margin: 5px;
        padding: 5px;
        cursor: pointer;
        
        &:hover{
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        }
    }
`

export const StyledMotionDiv = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000003d;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    p{
        /* color: white; */
        font-weight: 600;
        font-size: 14px;
        margin: 10px;
        padding: 3px;
        color: ${({selected}) => selected ? 'white' : 'white'};
        cursor: pointer;

        &:hover{
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        }
    }

`;