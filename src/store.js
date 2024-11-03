import { configureStore } from "@reduxjs/toolkit";
import userReduce from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
    reducer:{
        user: userReduce,
        cart: cartReducer,
    }
});

export default store;