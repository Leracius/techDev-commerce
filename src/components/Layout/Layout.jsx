import React, { useState } from 'react'
import { ContainerStyled, ElemContainer, HeaderStyled, MenuBurguer, MenuButton } from './LayoutStyles'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { clearCurrentUser } from '../../redux/user/userSlice'
import { styled } from 'styled-components'
import Cart from '../Cart/Cart'
import { AiOutlineMenu } from 'react-icons/ai'
import { styles } from '../../colors/styleArray';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'

const Layout = ({children}) => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentStyleIndex = useSelector((state) => state.style);
  const currentStyle = styles[currentStyleIndex];

  const [active, setActive] = useState(true)

  const handleClick = (e) =>{
    e.preventDefault()
    setActive(!active)
  }
  
  return (
    <>
    <ContainerStyled>
        <HeaderStyled>
  
            <ElemContainer>
              <img width='150px' src="https://res.cloudinary.com/dbo7lbynt/image/upload/v1689664836/assets-integrador/integrador-assets/logo-final_gh8mub.png" alt="" />
            </ElemContainer>
            <Cart/>
              


            {
              active && 
              <MenuBurguer style={currentStyle}>

              <NavlinkStyled to='/' style={({ isActive }) => ({ color: isActive ? 'white' : '#0000003d' })}>inicio</NavlinkStyled >
                <NavlinkStyled to='/home' style={({ isActive }) => ({ color: isActive ? 'white' : '#0000003d' })}>buscar</NavlinkStyled >
                { isAuth ? 
                <NavlinkStyled onClick={()=> dispatch(clearCurrentUser())} to='/login' style={({ isActive }) => ({ color: isActive ? 'white' : '#0000003d' })}>Log out</NavlinkStyled>
                : <NavlinkStyled to='/login' style={({ isActive }) => ({ color: isActive ? 'white' : '#0000003d' })}>login</NavlinkStyled>
                }
                 <NavlinkStyled to='/buy' style={({ isActive }) => ({ color: isActive ? 'white' : '#0000003d' })}>comprar</NavlinkStyled >
                 {/* <MenuButton onClick={(e)=>handleClick(e)}><AiOutlineMenu color='white' size={40}/></MenuButton> */}
                 <MenuButton onClick={(e)=>handleClick(e)}><BsFillArrowUpRightCircleFill color='white' size={30}/></MenuButton>

              </MenuBurguer>   
            }

            {
              !active && <MenuButton onClick={(e)=>handleClick(e)}><AiOutlineMenu color='white' size={30}/></MenuButton>
            }    
            {/* <ElemContainer>

            </ElemContainer> */}
        </HeaderStyled>
    </ContainerStyled>
        {children}
    {/* <FooterStyled>Soy footer</FooterStyled> */}
    </>
  )
}

const NavlinkStyled = styled(NavLink)`
  text-decoration: none;
  margin: 10px;
  font-weight: 900;
  padding: 5px;
  &:hover{
    scale: 1.1;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`

export default Layout