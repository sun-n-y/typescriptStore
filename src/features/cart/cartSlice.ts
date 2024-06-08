import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'cart slice',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

//export reducer to control the state
export default cartSlice.reducer;
