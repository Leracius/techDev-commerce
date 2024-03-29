import React, { useState } from 'react'
import { ContainerStyled, ElemContainer, HeaderStyled, MenuBurguer, MenuButton} from './LayoutStyles'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { clearCurrentUser } from '../../redux/user/userSlice'
import { styled } from 'styled-components'
import Cart from '../Cart/Cart'
import { AiOutlineMenu } from 'react-icons/ai'
import { styles } from '../../colors/styleArray';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import Josh from '../../components/Josh/Josh';
import { Button, Stack, Typography } from '@mui/material';

const Layout = ({children}) => {
  const {currentUser} = useSelector((state) => state.user);
  const [active, setActive] = useState(true)
  

  const handleClick = (e) =>{
    e.preventDefault()
    setActive(!active)
  }
  
  return (
    <>
    <ContainerStyled>
        <HeaderStyled>
            {/* <Alert sx={{position: 'fixed', left: '50%', transform: 'translate(-50%, -50%)', top: '40px'}} severity="error">This is an error alert — check it out!</Alert> */}
            {/* <ElemContainer>
              <img width='150px' src="https://res.cloudinary.com/dbo7lbynt/image/upload/v1689664836/assets-integrador/integrador-assets/logo-final_gh8mub.png" alt="" />
            </ElemContainer> */}
          <Button>
            <Typography variant='h6'>"techdev" E-COMMERCE</Typography>
          </Button>
            <Cart/>
              


            {
              active && 
              <MenuBurguer>
                

                <NavlinkStyled to='/' style={({ isActive }) => ({ boxShadow: isActive ? '2px 2px 2px rgba(0, 0, 0, 0.2)' : 'none' })}>
                  inicio
                </NavlinkStyled >
                <NavlinkStyled to='/home' style={({ isActive }) => ({ boxShadow: isActive ? '2px 2px 2px rgba(0, 0, 0, 0.2)' : 'none' })}>
                  buscar
                </NavlinkStyled >
                
                { currentUser ? 
                <NavlinkStyled to="/user" 
                style={({ isActive }) => ({ boxShadow: isActive ? '2px 2px 2px rgba(0, 0, 0, 0.2)' : 'none' })}>
                  {currentUser.name}
                </NavlinkStyled>
                : <NavlinkStyled to='/login' style={({ isActive }) => ({ boxShadow: isActive ? '2px 2px 2px rgba(0, 0, 0, 0.2)' : 'none' })}>
                  login
                </NavlinkStyled>
                }


                 <NavlinkStyled to='/buy' style={({ isActive }) => ({ boxShadow: isActive ? '2px 2px 2px rgba(0, 0, 0, 0.2)' : 'none' })}>
                  comprar
                </NavlinkStyled >
                 
                 <MenuButton onClick={(e)=>handleClick(e)}><BsFillArrowUpRightCircleFill color='white' size={30}/></MenuButton>

              </MenuBurguer>   
            }

            {
              !active && <MenuButton onClick={(e)=>handleClick(e)}><AiOutlineMenu color='white' size={30}/></MenuButton>
            }    
        </HeaderStyled>
    </ContainerStyled>
        {children}
    </>
  )
}

const NavlinkStyled = styled(NavLink)`
  text-decoration: none;
  margin: 10px;
  font-weight: 900;
  padding: 5px;
  color: white;
  border-radius: 10px;
  &:hover{
    scale: 1.1;
  }
`

export default Layout