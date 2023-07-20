import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { HeroContainer, StyledMotionDiv, TittleStyled } from './HeroStyles'



const Hero = ({children}) => {
  return (
    <HeroContainer>
      <AnimatePresence>
        <StyledMotionDiv
            animate={{ y: [-10, 10, -10], transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' } }}>
          <img src="https://res.cloudinary.com/dbo7lbynt/image/upload/v1689658470/assets-integrador/integrador-assets/hero-final_bmxthz.png" alt="" />
          {/* <TittleStyled >Bienvenido a tech.Dev </TittleStyled > */}
        </StyledMotionDiv>
      </AnimatePresence>
      {children}
    </HeroContainer>


  )
}

export default Hero