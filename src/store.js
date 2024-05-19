// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for the counter with actions and reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

// Export the actions
export const { increment, decrement } = counterSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
