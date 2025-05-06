import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("add item to cart");
      console.log("state", state);
      console.log("action", action);
      state.items.push(action.payload.card);
    },
    removeItem: (state, action) => {
      console.log("remove item from cart");
    },
    clearCart: () => {
      console.log("clear cart");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
