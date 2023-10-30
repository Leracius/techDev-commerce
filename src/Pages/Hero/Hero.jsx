import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { HeroContainer, StyledMotionDiv, TittleStyled } from './HeroStyles'
import { useSelector } from 'react-redux';
import Josh from '../../components/Josh/Josh';
import Model from '../../Canvas/Model';
import { Button, Stack, Typography } from '@mui/material';

const Hero = () => {

  const {currentUser} = useSelector(state=> state.user)
  
  const logoStyle = {
    color: 'white',
    borderRadius: '20px',
    bgcolor: 'black',
    textAling: 'center',
    padding: '30px',
    border: '2px solid #242424'
  }

  return (<>
      <HeroContainer>
      <Stack sx={{
          position: 'absolute', 
           zIndex: '10',
           '@media (max-width: 768px)': {
            top: '20%'
           }
      }}>
        <AnimatePresence>
            <StyledMotionDiv
                animate={{ 
                  y: [-10, 10, -10], 
                  transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' } 
                  }}>
                    <Typography variant='h3' sx={logoStyle}>
                      techdev.
                </Typography>
            </StyledMotionDiv>
        </AnimatePresence>
        
      </Stack>
      <Josh message="Bienvenido a tech.Dev" active={true} displayTime={3000} /> 
      <Model/>
    </HeroContainer>
  </>
  )
};

export default Hero