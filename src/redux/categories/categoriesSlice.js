import { createSlice } from "@reduxjs/toolkit"
// import { products, categorias } from "../../data/data-axios"
import getProductsData from "../../data/data-axios";

const { products, categorias } = await getProductsData();

const INITIAL_STATE = {
    categories: categorias,
    selectedCategory: null
}

const INITIAL_STATE_PROD = {
    prodcutos: products,
    selectedProduct: null
}

export const productSlice = createSlice({
    name: "productos",
    initialState: INITIAL_STATE_PROD,
    reducers: {
        getProduct: (state) => {
            return state
        },
        productCategory: (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }
    }
})

export const categorieSlice = createSlice({
    name: "categorias",
    initialState: INITIAL_STATE,
    reducers: {
        getCategories: (state) => {
            return state
        },
        selectCategory: (state, action) => {
            return {
                ...state,
                selectedCategory:
                action.payload !==state.selectedCategory ? action.payload : null
            }
        }
    }
})

export const { getCategories, selectCategory } = categorieSlice.actions
export default categorieSlice.reducer