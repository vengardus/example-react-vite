import { configureStore } from '@reduxjs/toolkit';
import gastosReducer from './redux/gastosSlice';

export default configureStore({
  reducer: {
    gastos: gastosReducer,
  },
});
