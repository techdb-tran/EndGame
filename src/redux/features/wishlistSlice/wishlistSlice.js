import { createSlice } from "@reduxjs/toolkit";

// const fetchFromLocalStorage = () => {
//   let wishlist = localStorage.getItem("wishlist");
//   if (wishlist) {
//     return JSON.parse(localStorage.getItem("wishlist"));
//   } else {
//     return [];
//   }
// };

// const storeInLocalStorage = (data) => {
//   localStorage.setItem("wishlist", JSON.stringify(data));
// };

// const initialState = {
//   wishlists: fetchFromLocalStorage(),
// };

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
      items: [],
    },
    reducers: {
      addToWishlist: (state, action) => {
        state.items.push(action.payload);
      },
      removeFromWishlist: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
