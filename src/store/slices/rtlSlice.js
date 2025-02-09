import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRTL: false,
};

const rtlSlice = createSlice({
  name: 'rtl',
  initialState,
  reducers: {
    toggleRTL: (state) => {
      state.isRTL = !state.isRTL;
      document.documentElement.setAttribute('dir', state.isRTL ? 'rtl' : 'ltr');
    },
    setRTL: (state, action) => {
      state.isRTL = action.payload;
      document.documentElement.setAttribute('dir', state.isRTL ? 'rtl' : 'ltr');
    }
  },
});

export const { toggleRTL, setRTL } = rtlSlice.actions;

export default rtlSlice.reducer;