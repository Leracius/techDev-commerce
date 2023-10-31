import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: null, isAuth: false, isVerify: false }, 
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
      state.isAuth = false; 
    },
    clearVerify:(state) =>{
      state.isVerify = false;
    },
    setVerfiy: (state) =>{
      state.isVerify = true
    }
  },
});

export const { setCurrentUser, clearCurrentUser, setVerfiy, clearVerify } = userSlice.actions;

export default userSlice.reducer;
