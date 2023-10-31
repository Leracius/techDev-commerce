import React, { useState } from 'react'
import { Stack, TextField, Button, Container, Typography } from '@mui/material'
import { postVerify } from '../../axios/verify'
import { useDispatch, useSelector } from 'react-redux';
import Josh from '../../components/Josh/Josh';
import { setVerfiy } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const VerifyUser = () => {
    const [value, setValue] = useState('');
    const {currentUser, isVerify} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleVerify = () => {
      postVerify(currentUser.email, value, dispatch)
      setValue('');
    };

    if(isVerify){
        navigate('/home')
    }

  return (
    <Container maxWidth sx={{ 
        height: '70vh' ,
        width: '100vw', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column'}}>
        <Josh message={`Te enviamos un correo a ${currentUser?.email}`} active={true} displayTime={3000}/>
        <Stack sx={{
            bgcolor: 'black', 
            p: '30px',
            borderRadius: '20px',
            border: '2px solid #242424'
            }}>
            <TextField
                label="codigo de verificación"
                variant="outlined"
                sx={{ m: '10px', color: 'white' }}
                value={value}
                onChange={handleChange}
            />
            <Button onClick={handleVerify}>Enviar</Button>
        </Stack>
    </Container>

  )
}

export default VerifyUser