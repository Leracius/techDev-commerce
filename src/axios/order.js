import { fetchOrderStart, fetchOrderSucces, fetchOrdersFail } from '../redux/orders/orderSlice'
import { BASE_URL } from '../utils/costants'

//estoy recibiendo la funcion del disptach por parametro
export const getOrders = async (dispatch ,currentUser) =>{
    dispatch(fetchOrderStart())

    try {
        const orders = await axios.get(`${BASE_URL}/orders`, {
            headers: {
                "x-token" : currentUser.token
            }
        })
        if(orders){
            dispatch(fetchOrderSucces(orders.data.data))
        }
    } catch (error) {
        console.log(error)
        dispatch(fetchOrdersFail("Algo salio mal en la peticion, revisa las ordenes"))
    }
}