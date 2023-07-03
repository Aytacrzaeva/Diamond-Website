import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import wishReducer from './wishSlice'
const store = configureStore({
    reducer:{
        cart:cartReducer,
        wish:wishReducer
    }
})

export default store;