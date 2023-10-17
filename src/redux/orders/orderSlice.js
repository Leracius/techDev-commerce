import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    orders: null,
    loading: false,
    error: null,
}

//crear un slice que atraves de los dispatch manejar cuando esta cargando, manejar el error, borrar las ordenes cargadas

const orderSlice = createSlice({
    name: 'orders',
    initialState: INITIAL_STATE,
    reducers: {
        //si falla la creacion de la orden 
        //initial statec omo param por defecto
        //el error se setea con el ac.py
        //fucniona en catch y cuando se atrapa un error se hace un dispatch
        //con esto pudo consumir los errores desde cualquier lado
        createOrderFail: (state = INITIAL_STATE, action) =>{
            return {
                ...state,
                error: action.payload
            }
        },
        //si sale todo bien dentro del try, con esta funcion guardo la respuesta de la api
        //y seteo los diferentes estados de loading y error desde redux
        fetchOrdersSuccess: (state, action) =>{
            return {
                ...state,
                loading: false,
                error: null,
                orders: [...action.payload]
            }
        },
        //cuando quiero crear una orden
        //con esta funcion puedo mostrar el error en pantalla
        fetchOrderFail: (state, action) =>{
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        },
        //loading
        fetchOrderStart: (state, action) =>{
            return {
                ...loading,
                loading: true
            }
        },
        cleanError: (state,) =>{
            return {
                ...state,
                error: null
            }
        },
        cleanOrders: (state) =>{
            return {
                ...state,
                orders: null
            }
        }
    }
})

export const {
    createOrderFail,
    fetchOrdersSuccess,
    fetchOrderStart,
    fetchOrderFail,
    cleanError,
    cleanOrders
} = orderSlice.actions

export default orderSlice.reducer