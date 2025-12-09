import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === product.name);

      if (existingItem) {
        // If it exists, increase the quantity by 1
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it to the cart with quantity 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      // Filter out the item with the matching name
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item to update
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        // Update its quantity to the new value
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
