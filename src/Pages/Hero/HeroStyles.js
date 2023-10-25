import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      /* background-image: url('https://res.cloudinary.com/dbo7lbynt/image/upload/v1689910841/background-mobile-home_q8ta5d.png'); */
      height: 100vh;
      padding-top: 30px;
      justify-content: start;
      background-size: contain;
      background-repeat: no-repeat;
    }

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
    width: 80%;
  }
`