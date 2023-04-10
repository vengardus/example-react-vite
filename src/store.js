import { configureStore } from '@reduxjs/toolkit';
import gastosReducer from './components/alice01/gastosSlice';
import { productsSlice } from './components/products/productsSlice';


export default configureStore({
  reducer: {
    products: productsSlice.reducer,
    gastos: gastosReducer,
  },
});
