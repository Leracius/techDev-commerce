import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { persistStore } from 'redux-persist'

import categoriesReducer from './categories/categoriesSlice'
import productReducer from  './products/productSlice'
import cartReducer from './selected/DataSlice'
import userReducer from './user/userSlice'
import styleReducer from './configs/styleSlice'

//Todo lo que se almacene aquí perdura en el local Storage
const reducers = combineReducers({
    categories: categoriesReducer,
    products: productReducer,
    newData: cartReducer,
    user: userReducer,
    style: styleReducer,
})

//el persistConfig no se importa porque su nombre se crea por convención
const persistConfig = {
    key: "root",
    //el storage se importa de redux-persist
    storage,
    whitelist: ['newData', 'user', 'style']
    // la tercera configuración determina qué reducers deben ser persistidos
};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    })
})

//también es convención
export const persistor = persistStore(store)
