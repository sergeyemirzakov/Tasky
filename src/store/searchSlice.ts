import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
  searchValue: string;
}
export const initialState: IInitialState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    searchTodo: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { searchTodo } = searchSlice.actions;

export default searchSlice.reducer;
