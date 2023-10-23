import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCurrentUser } from '../../redux/user/userSlice';
import Container from '@mui/material/Container';
import { NavLinkStyled } from '../Cart/CartStyles';
import { NavLink } from "react-router-dom"
import { Button, Card, Stack, Typography } from '@mui/material';
import { clearOrders } from '../../redux/orders/orderSlice';
import { ButtonContainer } from '../Products/CardStyles';
import { FaUserEdit } from 'react-icons/fa'
import Josh from '../Josh/Josh';


const UserMenu = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state) => state.user);

    const buttonStyle = {
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '15px'
    }

  return (
    <Container maxWidth sx={{width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant='h2' sx={{color: "white", textAlign: 'center'}}>Bienvenido {currentUser.name}!</Typography>
        <Josh message={`Hola ${currentUser.name}!, ya pudiste ver algo de la tienda?`} active={true} displayTime={3000} /> 
        <Stack sx={{}}>
        <ButtonContainer style={{display: 'flex'}}>
          
          <button style={buttonStyle}>
            <NavLinkStyled to={currentUser.name}
                onClick={()=>{
                console.log(currentUser.name)
                }}>
                usuario
            </NavLinkStyled>
          </button>
          <button  style={buttonStyle}>
            <NavLinkStyled to="/orders">
                ver mis ordenes
            </NavLinkStyled>
          </button>
          <button  style={buttonStyle}>
            <NavLinkStyled to='/login'
                onClick={()=>{
                  const result = confirm("Estas seguro?")
                  if(result){
                    dispatch(clearCurrentUser())
                    dispatch(clearOrders())
                  }}}>
                cerrar sesion
            </NavLinkStyled>
          </button>
        </ButtonContainer>

        </Stack>


    </Container>
  )
}

export default UserMenu

                // onClick={()=>{
                //   const result = confirm("Estas seguro?")
                //   if(result){
                //     dispatch(clearCurrentUser())
                //   }}} 