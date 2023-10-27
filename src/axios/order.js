import { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFail, createOrderFail } from '../redux/orders/orderSlice'
import { BASE_URL } from '../utils/costants'
import axios from 'axios'

//estoy recibiendo la funcion del disptach por parametro
export const getOrders = async (dispatch ,currentUser) =>{
    dispatch(fetchOrdersStart())

    try {
        const orders = await axios.get(`${BASE_URL}/orders`, {
            headers: {
                "x-token" : currentUser.token
            }
        })
        if(orders){
            dispatch(fetchOrdersSuccess(orders.data.data))
        }
    } catch (error) {
        console.log(error)
        dispatch(fetchOrdersFail("Algo salio mal en la peticion, revisa las ordenes"))
    }
}

export const createOrder = async(order, dispatch, currentUser) =>{
    try {
        const response = await axios.post(`${BASE_URL}/orders`, order,{
            headers: {
                "x-token" : currentUser.token
            }
        })
        if(response){
            getOrders(dispatch, currentUser)
        }
    } catch (error) {
        console.log(error)
        dispatch(createOrderFail)
    }
}

export const getProducts = async(dispatch)=>{
    try {
        const response = axios.get(`${BASE_URL}/products`, )
    } catch (error) {
        
    }
}