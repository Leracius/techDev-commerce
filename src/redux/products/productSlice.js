import { createSlice } from "@reduxjs/toolkit";
import getProductsData from "../../data/data-axios";
// import { reducedProducts } from "../../data/data-axios";

const { reducedProducts } = await getProductsData();

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