import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Stack } from '@mui/material';
import { getOrders } from '../../axios/order';
import { clearError, fetchOrdersFail } from '../../redux/orders/orderSlice';
import OrderComponent from './OrderComponent';
import OrderCards from './OrderCards';


const Orders = () => {
    const {currentUser} = useSelector((state) => state.user);
    const {orders, error} = useSelector((state) => state.orders)
    const dispatch = useDispatch()

    useEffect(()=>{
      if(!orders){
        getOrders(dispatch, currentUser)
        console.log(orders);
      }
      console.log(orders);
      if(currentUser){
        dispatch(fetchOrdersFail())
      }else{
        error && dispatch(clearError())
      }
    },[currentUser?.token, orders, error])

  return (
    <Container maxWidth sx={{width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        {/* <Typography variant='h3' sx={{color: "white", textAlign: 'center'}}>Órdenes de {currentUser.name}</Typography> */}
        <Stack>
          <OrderComponent/>
        </Stack>
    </Container>
  )
}

export default Orders