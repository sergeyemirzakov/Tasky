import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { arrayMoveImmutable } from 'array-move';
import { initialState } from './initialState';

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        text: string;
        priority: string;
        description?: string;
        priorityIndex: number;
      }>,
    ) => {
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text,
        description: action.payload.description || '',
        complete: false,
        priority: action.payload.priority.toLowerCase() || 'low',
        priorityIndex: action.payload.priorityIndex || 1,
      });
    },
    sortTodos: (state, action: PayloadAction<string>) => {
      if (action.payload === 'Priority') {
        state.todos.sort((a, b) => (a['priorityIndex'] > b['priorityIndex'] ? -1 : 1));
      } else if (action.payload === 'Name') {
        state.todos.sort((a, b) => (a['text'] > b['text'] ? 1 : -1));
      }
    },
    setSorted: (state, action: PayloadAction<string>) => {
      state.sorted = action.payload;
    },
    isComplete: (state, action: PayloadAction<string>) => {
      const completeTodo = state.todos.find((s) => s.id === action.payload);
      if (completeTodo !== undefined) {
        completeTodo.complete = !completeTodo.complete;
      }
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
        priorityIndex: number | null;
      }>,
    ) => {
      const currentTask = state.todos.find((t) => t.id === action.payload.id);
      if (currentTask !== undefined) {
        currentTask.text = action.payload.text || '';
        currentTask.priority = action.payload.priority || 'low';
        currentTask.priorityIndex = action.payload.priorityIndex || 1;
      }
    },
    onChangeTaskOrged: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>,
    ) => {
      state.todos = arrayMoveImmutable(
        state.todos,
        action.payload.oldIndex,
        action.payload.newIndex,
      );
    },
  },
});

export const {
  addTodo,
  isComplete,
  isRemoveTask,
  onEditTask,
  sortTodos,
  setSorted,
  onChangeTaskOrged,
} = taskSlice.actions;

export default taskSlice.reducer;
