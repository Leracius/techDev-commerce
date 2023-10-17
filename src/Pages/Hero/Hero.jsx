import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { HeroContainer, StyledMotionDiv, TittleStyled } from './HeroStyles'
import { useSelector } from 'react-redux';

const Hero = () => {

  const {currentUser} = useSelector(state=> state.user)

  return (<>
      <HeroContainer>
      <AnimatePresence>
        <StyledMotionDiv
            animate={{ y: [-10, 10, -10], transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' } }}>
          <img src="https://res.cloudinary.com/dbo7lbynt/image/upload/v1689658470/assets-integrador/integrador-assets/hero-final_bmxthz.png" alt="" />
          <TittleStyled >Bienvenido a tech.Dev {currentUser? currentUser.name : ""} </TittleStyled >         
        </StyledMotionDiv>
      </AnimatePresence>
    </HeroContainer>
  </>
  )
};

export default Hero