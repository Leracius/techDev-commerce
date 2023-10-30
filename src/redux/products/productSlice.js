import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    products: [],
}

export const productSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state
        },
        setProducts: (state, action) => {
            return {
              ...state,
              loading: false,
              error: null,
              products: action.payload,
            };
        }
    }
})

export const {getProducts, setProducts} = productSlice.actions

export default productSlice.reducer