import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
  todos: Array<any>;
  showModal: boolean;
}

const initialState: IInitialState = {
  todos: [],
  showModal: false,
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
    },
    isRemoveTask: (state, action: PayloadAction<string | null>) => {
      state.todos = state.todos.filter((i) => i.id !== action.payload);
    },
    onEditTask: (
      state,
      action: PayloadAction<{
        id: string | null;
        text: string | null;
        priority: string | null;
      }>,
    ) => {
      const currentTask = state.todos.find((t) => t.id === action.payload.id);
      currentTask.text = action.payload.text;
      currentTask.priority = action.payload.priority;
    },
    showModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
  },
});

export const { addTodo, isComplete, isRemoveTask, onEditTask, showModal } =
  taskSlice.actions;

export default taskSlice.reducer;
