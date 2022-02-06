import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
  todos: Array<any>;
}

const initialState: IInitialState = {
  todos: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; priority: string }>) => {
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text.toLowerCase(),
        complete: false,
        priority: action.payload.priority,
      });
    },
    isComplete: (state, action: PayloadAction<string>) => {
      const completeTodo = state.todos.find((s) => s.id === action.payload);
      completeTodo.complete = !completeTodo.complete;
      completeTodo.important = false;
    },
    isRemoveTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((i) => i.id !== action.payload);
    },
    changeUserValue: (
      state,
      action: PayloadAction<{ id: string; textValue: string }>,
    ) => {
      const changeTextValue = state.todos.find((t) => t.id === action.payload.id);
      changeTextValue.text = action.payload.textValue;
    },
  },
});

export const { addTodo, isComplete, isRemoveTask, changeUserValue } = taskSlice.actions;

export default taskSlice.reducer;
