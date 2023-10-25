import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { HeroContainer, StyledMotionDiv, TittleStyled } from './HeroStyles'
import { useSelector } from 'react-redux';
import Josh from '../../components/Josh/Josh';
import Model from '../../Canvas/Model';
import { Button, Stack, Typography } from '@mui/material';

const Hero = () => {

  const {currentUser} = useSelector(state=> state.user)
  

  return (<>
      <HeroContainer>
      <Stack>
        <Typography variant='h6' sx={{color: 'white'}}>{currentUser.name}</Typography>
      </Stack>
      <Stack sx={{
          position: 'absolute', 
           zIndex: '10',
      }}>
        <AnimatePresence>
            <StyledMotionDiv
                animate={{ 
                  y: [-10, 10, -10], 
                  transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' } 
                  }}>
                    <Typography variant='h3' sx={{
                        color: 'white',
                        borderRadius: '20px',
                        bgcolor: '#00000374',
                        textAling: 'center',
                        padding: '30px',
                        }}>
                      techdev
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