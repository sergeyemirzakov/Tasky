import React from 'react';
import './TodoList.scss';

import { Box, Checkbox, Text, Badge } from '@chakra-ui/react';

import { isComplete, isRemoveTask } from '../../store/taskSlice';
import { useDispatch } from 'react-redux';

import { DefaultScreen } from '../DefaultScreen/DefaultScreen';
import { TodoItem } from '../TodoItem/TodoItem';

import { Table, Thead, Tr, Th, Tbody, Tfoot, Td } from '@chakra-ui/react';

interface TodoListProps {
  task: {
    id: string;
    text: string;
    complete: boolean;
    priority: string;
  }[];
  value?: string;
}

export const TodoList: React.FC<TodoListProps> = ({ task }) => {
  const dispatch = useDispatch();

  const onCompleteTaks = (id: string) => {
    dispatch(isComplete(id));
  };

  const removeTask = (id: string) => {
    dispatch(isRemoveTask(id));
  };

  const onEditTask = (id: string) => {
    // const editibleTask = task.find((el) => el.id === id);
    console.log(id);
  };

  // if (task.length === 0) {
  //   return <DefaultScreen />;
  // }

  return (
    <>
      <Box bg="white" borderRadius="xl" boxShadow="base">
        <Table size="md" rounded="md" variant="simple">
          <Thead>
            <Tr>
              <Th width="20px"></Th>
              <Th borderLeft="0.5px solid #E2E8F0">Task name</Th>
              <Th width="300px" borderLeft="0.5px solid #E2E8F0">
                Priority
              </Th>
              <Th width="300px" borderLeft="0.5px solid #E2E8F0">
                Status
              </Th>
            </Tr>
          </Thead>
          {task.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompleteTaks={(id) => onCompleteTaks(id)}
              removeTask={(id) => removeTask(id)}
              onEditTask={(id) => onEditTask(id)}
            />
          ))}
        </Table>
      </Box>
    </>
  );
};
