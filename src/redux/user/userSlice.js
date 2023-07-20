import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: null, isAuth: false }, // Agregamos la propiedad isAuth al initialState
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true; // Actualizamos isAuth a true cuando se establece el usuario
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
      state.isAuth = false; // Actualizamos isAuth a false cuando se borra el usuario
    },
  },
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;

export default userSlice.reducer;
