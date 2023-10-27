import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FloatBtn } from '../../Pages/Product/ProductStyle'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const formatDate = (date) => {
    const fecha = date?.split('T')[0];
    const fechaLegible = fecha?.split('-').reverse().join('/');
    const hora = date?.split('T')[1].split('.')[0];
    const horaLegible = hora?.split(':').slice(0, 2).join(':');
    return `${fechaLegible} ${horaLegible}`;
  };

const OrderCards = ({createdAt, _id, total}) => {

    const navigate = useNavigate()

    const stackStyle = {
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'black',
      border: '2px solid #242424',
      m: '20px',
      p: '30px',
      borderRadius: '20px'
    }

    const style = {
      color: 'white',
      borderRadius: '20px',
      textAling: 'center',
    }

  return (
    <Stack sx={stackStyle}>
        <FloatBtn onClick={()=>navigate(-1)}><BsFillArrowLeftCircleFill size={30} color='white'/></FloatBtn>
        <Typography variant='h6' sx={style}>Orden ID: #{_id.slice(0,8)}</Typography>
        <Typography variant='h6' sx={style}>Fecha de pedido: {formatDate(createdAt)}</Typography>
        <Typography variant='h6' sx={style}>Precio total: ${total}</Typography>
    </Stack>

  )
}

export default OrderCards