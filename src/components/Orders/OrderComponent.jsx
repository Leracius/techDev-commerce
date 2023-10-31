import { Card, Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import OrderCards from './OrderCards'
import Loading from '../../Loader/LoaderStyled'

const OrderComponent = () => {
  const { orders, loading, error } = useSelector(state => state.orders)

  return (
    <Container>
      {
        loading && !orders ? (
          <Loading />
        ) : error ? (
          <Typography>{error}</Typography>
        ) : orders?.length ? (
          orders.map((order) => <OrderCards {...order} key={order._id} />)
        ) : (
          <Typography variant='h4' sx={{
            color : 'white', 
            bgcolor: 'black', 
            marginTop: '30px', 
            borderRadius: '15px',
            border: '2px solid #242424',
            p : '20px',}}>No hay ordenes</Typography>
        )
      }
    </Container>
  )
}

export default OrderComponent
