import React from 'react';
import './TodoList.scss';

import { SimpleGrid } from '@chakra-ui/react';

import { isComplete, isImportant, isRemoveTask } from '../../store/taskSlice';
import { useDispatch } from 'react-redux';

import { DefaultScreen } from '../DefaultScreen/DefaultScreen';
import { TodoItem } from '../TodoItem/TodoItem';

interface TodoListProps {
  task: {
    id: string;
    text: string;
    complete: boolean;
    important: boolean;
  }[];
  value?: string;
}

export const TodoList: React.FC<TodoListProps> = ({ task }) => {
  const dispatch = useDispatch();

  const onCompleteTaks = (id: string) => {
    dispatch(isComplete(id));
  };

  const onImportantTask = (id: string) => {
    dispatch(isImportant(id));
  };

  const removeTask = (id: string) => {
    dispatch(isRemoveTask(id));
  };

  if (task.length === 0) {
    return <DefaultScreen />;
  }

  return (
    <SimpleGrid marginTop={5} columns={2} spacing={5}>
      {task.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompleteTaks={(id) => onCompleteTaks(id)}
          onImportantTask={(id) => onImportantTask(id)}
          removeTask={(id) => removeTask(id)}
        />
      ))}
    </SimpleGrid>
  );
};
