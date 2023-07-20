import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh -40px);
    justify-content: center;
    margin-bottom: 40px;

`

export const TittleStyled = styled.div`
  position: absolute;
  font-size: 30px;
  color: white;
  background-color: #0000009b;
  padding: 10px;
  border-radius: 20px;
  top: 50%;
`

export const StyledMotionDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  img{
    width: 90%;
  }
`