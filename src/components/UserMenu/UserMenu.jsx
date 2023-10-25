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
    const {cartItems} = useSelector(state => state.newData)

    const buttonStyle = {
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '15px',
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
        <Josh message={`Hola ${currentUser.name}!, ya pudiste ver algo de la tienda?`} active={true} displayTime={3000} /> 
        <Stack sx={{bgcolor: 'black', p: '60px', borderRadius: '30px', textAlign:'center'}}>
          <Typography variant='h6' sx={{color: '#1018aa'}}>Email: {currentUser.email}</Typography>
          <Typography variant='h6' sx={{color: '#1018aa'}}>Tu nombre: {currentUser.name} {currentUser.surname}</Typography>
        <Button style={buttonStyle}>
            <NavLinkStyled to={currentUser.name}
                onClick={()=>{
                console.log(currentUser.name)
                }}>
                usuario
            </NavLinkStyled>
          </Button>
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
                  }}}>
                cerrar sesion
            </NavLinkStyled>
          </Button>
        </Stack>
    </Container>
  )
}

export default UserMenu

