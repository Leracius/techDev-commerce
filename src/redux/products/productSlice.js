import { createSlice } from "@reduxjs/toolkit";
import { reducedProducts } from "../../data/data-axios";

const INITIAL_STATE = {
    products: reducedProducts,
}

export const productSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state
        }
    }
})

export const {getProducts} = productSlice.actions

export default productSlice.reducer