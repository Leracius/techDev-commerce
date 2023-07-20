import { createSlice } from '@reduxjs/toolkit';

const styleSlice = createSlice({
  name: 'style',
  initialState: 0,
  reducers: {
    setStyleIndex: (state, action) => {
      return action.payload;
    },
  },
});

export const { setStyleIndex } = styleSlice.actions;

export default styleSlice.reducer;
