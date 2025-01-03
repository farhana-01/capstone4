import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:[]
};

const watchSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
    console.log(action,'action')
      state.items.push({...action.payload});
    },
  },
});

export const { addToCart } = watchSlice.actions;
export default watchSlice.reducer;
