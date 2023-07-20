import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToCart,
  removeItemFromCart,
  // resetShippingCost,
} from './cart';

const SHIPPING_COST = 500

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  shippingCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        shippingCost: SHIPPING_COST,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        shippingCost: 0,
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        shippingCost: 0,
        cartItems: [],
      };
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addToCart, clearCart, removeFromCart, toggleHiddenCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// REDUCERS ANTERIORES:
// deleteProd: (state, action) => {
//   const productToDelete = state.data.find((product) => product.name === action.payload.name);
//   if (productToDelete.quantity === 0) {
//     state.data = state.data.filter((product) => product.name !== action.payload.name);
//   } else {
//     // Aquí puedes manejar la lógica de disminuir la cantidad en caso de que sea más de 0
//     // Por ejemplo, state.data.find((product) => product.name === action.payload.name).quantity--;
//   }
// },
//     setData: (state, action) => {
//       state.data.push(action.payload);
//     },
//     deleteData: (state) => {
//       state.data = []; // Asignar un nuevo array vacío al estado
//     },
//   },
// });