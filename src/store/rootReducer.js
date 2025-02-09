import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';
import rtlReducer from './slices/rtlSlice';

const rootReducer = combineReducers({
  user: userReducer,
  rtl: rtlReducer
});

export default rootReducer;