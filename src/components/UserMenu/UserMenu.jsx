import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCurrentUser, clearVerify } from '../../redux/user/userSlice';
import Container from '@mui/material/Container';
import { NavLinkStyled } from '../Cart/CartStyles';
import { NavLink } from "react-router-dom"
import { Button, Card, Input, Stack, TextField, Typography } from '@mui/material';
import { clearOrders } from '../../redux/orders/orderSlice';
import { ButtonContainer } from '../Products/CardStyles';
import { FaUserEdit } from 'react-icons/fa'
import Josh from '../Josh/Josh';
import { postVerify } from '../../axios/verify';


const UserMenu = () => {
    const dispatch = useDispatch()
    const {currentUser, isVerify} = useSelector((state) => state.user);
    const [active, setActive] = useState(false)

    const buttonStyle = {
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '10px',
      margin: '10px',
      bgcolor: 'tomato' ,
    }

  return (
    <Container maxWidth sx={{ 
      height: '70vh' ,
      width: '100vw', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column'}}>
        <Josh message={`Hola ${currentUser?.name}!, ya pudiste ver algo de la tienda?`} active={true} displayTime={3000} /> 
        <Stack sx={{bgcolor: 'black', p: '40px', borderRadius: '30px', textAlign:'center',border: '2px solid #242424'}}>
          {
            currentUser && <Stack sx={{border: '2px solid #242424', borderRadius: '10px', padding: '10px'}}>
            <Typography variant='h6' sx={{color: 'white'}}>{currentUser?.email}</Typography>
            <Typography variant='h6' sx={{color: 'white'}}>{currentUser?.name} {currentUser?.surname}</Typography>
          </Stack>
          }
          <Button  style={buttonStyle}>
            <NavLinkStyled to="/orders">
                ver mis ordenes
            </NavLinkStyled>
          </Button>
          <Button  style={buttonStyle}>
            <NavLinkStyled to='/login'
                onClick={()=>{
                  const result = confirm("Estas seguro?")
                  if(result){
                    dispatch(clearCurrentUser())
                    dispatch(clearOrders())
                    dispatch(clearVerify())
                  }}}>
                cerrar sesion
            </NavLinkStyled>
          </Button>
          {
            !isVerify && <Button  style={buttonStyle}>
            <NavLinkStyled to={currentUser.name}>
                Verificarme
            </NavLinkStyled>
          </Button>
          }
        </Stack>

    </Container>
  )
}

export default UserMenu

