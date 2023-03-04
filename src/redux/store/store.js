import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/orderSlice/orderSlice';
import productsReducer from '../features/products/productsSlice'
import usersReducer from '../features/users/usersSlice'
const store = configureStore({
  reducer: {
    order: orderReducer,
    products: productsReducer,
    users: usersReducer,
  },
});

export default store;

