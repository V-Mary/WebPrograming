import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../app/itemCart/itemSlice';

export default configureStore({
  reducer: {
    itemInCart: itemReducer
  },
});
