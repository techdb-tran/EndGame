import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/orderSlice/orderSlice';
import productsReducer from '../features/products/productsSlice'
import productReducer from '../features/productSlice/productSlice'
import usersReducer from '../features/users/usersSlice'
import cartReducer from '../features/cartSlice/cartSlice'
import sidebarReducer from '../features/sidebarSlice/sidebarSlice'
import categoryReducer from '../features/categorySlice/categorySlice'
import searchReducer from '../features/searchSlice/searchSlice'
import wishlistReducer from '../features/wishlistSlice/wishlistSlice'
const store = configureStore({
  reducer: {
    orders: orderReducer,
    sidebar: sidebarReducer,
    category: categoryReducer,
    order: orderReducer,
    products: productsReducer,
    product: productReducer,
    users: usersReducer,
    cart: cartReducer,
    search: searchReducer,
    wishlist: wishlistReducer
  },
});

export default store;

