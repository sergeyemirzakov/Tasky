import { configureStore } from '@reduxjs/toolkit';
import taskSliceReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    taskSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
