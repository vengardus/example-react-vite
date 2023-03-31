import { configureStore } from '@reduxjs/toolkit';
import gastosReducer from './redux/gastosSlice';
import { productsSlice } from './redux/productsSlice';
// import productsReducer from './redux/productsSlice'

export default configureStore({
  reducer: {
    products: productsSlice.reducer,
    gastos: gastosReducer,
  },
});
