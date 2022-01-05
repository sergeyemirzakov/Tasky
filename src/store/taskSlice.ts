import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface taskSliceTypes {
  todos: any[];
}

const initialState: taskSliceTypes = {
  todos: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        complete: false,
        important: false,
      });
    },
    isComplete: (state, action: PayloadAction<string>) => {
      const completeTodo = state.todos.find((s) => s.id === action.payload);
      completeTodo.complete = !completeTodo.complete;
      completeTodo.important = false;
    },
    isImportant: (state, action: PayloadAction<string>) => {
      const importantTodo = state.todos.find((s) => s.id === action.payload);
      importantTodo.important = !importantTodo.important;
      importantTodo.complete = false;
    },
    isRemoveTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addTodo, isComplete, isImportant, isRemoveTask } = taskSlice.actions;

export default taskSlice.reducer;
