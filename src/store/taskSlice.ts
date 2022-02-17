import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { StatLabel } from '@chakra-ui/react';

export interface Todo {
  id: string;
  text: string;
  description: string;
  complete: boolean;
  priority: string;
}

export interface IInitialState {
  todos: Todo[];
  showModal: boolean;
  searchValue: string;
}

const initialState: IInitialState = {
  todos: [
    {
      id: '0',
      text: 'Great title',
      description: 'Great Description',
      complete: false,
      priority: 'low',
    },
    {
      id: '1',
      text: 'Another great titile',
      description: 'And another great description',
      complete: false,
      priority: 'medium',
    },
    {
      id: '2',
      text: 'Really important title',
      description: 'Really important description',
      complete: false,
      priority: 'high',
    },
  ],
  showModal: false,
  searchValue: '',
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ text: string; priority: string; description?: string }>,
    ) => {
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text,
        description: action.payload.description || '',
        complete: false,
        priority: action.payload.priority.toLowerCase() || 'low',
      });
    },
    filterTodo: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
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
      }>,
    ) => {
      const currentTask = state.todos.find((t) => t.id === action.payload.id);
      if (currentTask !== undefined) {
        currentTask.text = action.payload.text || '';
        currentTask.priority = action.payload.priority || 'low';
      }
    },
    showModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
  },
});

export const { addTodo, isComplete, isRemoveTask, onEditTask, showModal, filterTodo } =
  taskSlice.actions;

export default taskSlice.reducer;
