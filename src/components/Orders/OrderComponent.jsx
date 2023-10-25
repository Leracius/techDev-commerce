import { Card, Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import OrderCards from './OrderCards'
import Loading from '../../Loader/LoaderStyled'

const OrderComponent = () => {

    const {orders, loading, error} = useSelector(state=> state.orders)

    if(loading && !orders){
        return <Typography>Cargando ordenes...</Typography>
    }

    if(error){
        return <Typography>{error}</Typography>
    }

  return (
    <Container>
      {
        orders?.length ? (
          orders.map((order) => {
            return <OrderCards {...order} key={order._id} />
          })
        ) : (
            <Loading/>
          )
      }
    </Container>
  )
}

export default OrderComponent