import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userDetails = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
    setUserDetails, 
    logout 
} = userSlice.actions;

export default userSlice.reducer;