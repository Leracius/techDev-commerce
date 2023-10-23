import { Card, CardContent, CardHeader, Typography } from '@mui/material'
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

  return (
    <Card sx={{bgcolor: '#242424', m: '10px', color: 'white'}}>
        <FloatBtn onClick={()=>navigate(-1)}><BsFillArrowLeftCircleFill size={30} color='white'/></FloatBtn>
        <CardContent>Orden ID: #{_id.slice(0,8)}</CardContent>
        <CardContent>Fecha de pedido: {formatDate(createdAt)}</CardContent>
        <CardContent>Precio total: ${total}</CardContent>
    </Card>
  )
}

export default OrderCards