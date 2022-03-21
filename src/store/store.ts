import { configureStore } from '@reduxjs/toolkit';
import taskSliceReducer from './taskSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    taskSliceReducer,
    searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
