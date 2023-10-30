import { createSlice } from "@reduxjs/toolkit"
// import { products, categorias } from "../../data/data-axios"

const INITIAL_STATE = {
    categories: [],
    selectedCategory: null
}

export const categorieSlice = createSlice({
    name: "categories",
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
        },
        setCategories: (state, action) => {
            return {
              ...state,
              loading: false,
              error: null,
              categories: action.payload,
            };
        }
    }
})

export const { getCategories, selectCategory, setCategories } = categorieSlice.actions
export default categorieSlice.reducer