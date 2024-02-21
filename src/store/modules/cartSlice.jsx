import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  cartTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      state.carts.push(action.payload);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    removeCart(state, action) {
      const itemIdToRemove = action.payload;
      state.carts = state.carts.filter((item) => item.id !== itemIdToRemove);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    totalCart(state, action) {
      state.cartTotal = state.carts.reduce((acc, curr) => acc + curr.price, 0);
    },
  },
});

export const { addCart, removeCart, totalCart } = cartSlice.actions;
export default cartSlice.reducer;
