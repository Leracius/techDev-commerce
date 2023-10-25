import React from 'react'
import HeroCanvas from './ModelCanvas'
import { MainContainer } from './ModelStyles'

const Model = () => {
  return (
      <MainContainer>
        <HeroCanvas path='https://res.cloudinary.com/dbo7lbynt/image/upload/v1698207813/assets-integrador/models/joycon-SIGN_irxetz.glb'/>
      </MainContainer>
  )
}
      
export default Model