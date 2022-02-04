import React from 'react';
import './TodoList.scss';

import { Box, SimpleGrid } from '@chakra-ui/react';

import { isComplete, isImportant, isRemoveTask } from '../../store/taskSlice';
import { useDispatch } from 'react-redux';

import { DefaultScreen } from '../DefaultScreen/DefaultScreen';
import { TodoItem } from '../TodoItem/TodoItem';

import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
  Divider,
} from '@chakra-ui/react';

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

  // if (task.length === 0) {
  //   return <DefaultScreen />;
  // }

  return (
    <Box bg="white" borderRadius="10px" boxShadow="base">
      <Table size="md" rounded="md" variant="simple">
        <Thead>
          <Tr>
            <Th width="50px">#</Th>
            <Th borderLeft="1px solid #E2E8F0">Task name</Th>
            <Th width="300px" borderLeft="1px solid #E2E8F0">
              Priority
            </Th>
            <Th width="300px" borderLeft="1px solid #E2E8F0">
              Status
            </Th>
            <Th width="300px" borderLeft="1px solid #E2E8F0">
              Date
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Td>25.4</Td>
          <Td borderLeft="1px solid #E2E8F0">inches</Td>
          <Td borderLeft="1px solid #E2E8F0">millimetres (mm)</Td>
          <Td borderLeft="1px solid #E2E8F0">25.4</Td>
          <Td borderLeft="1px solid #E2E8F0">25.4</Td>
        </Tbody>
        <Tbody>
          <Td>25.4</Td>
          <Td borderLeft="1px solid #E2E8F0">inches</Td>
          <Td borderLeft="1px solid #E2E8F0">millimetres (mm)</Td>
          <Td borderLeft="1px solid #E2E8F0">25.4</Td>
          <Td borderLeft="1px solid #E2E8F0">25.4</Td>
        </Tbody>
        <Tbody>
          <Td>25.4</Td>
          <Td borderLeft="1px solid #E2E8F0">inches</Td>
          <Td borderLeft="1px solid #E2E8F0">millimetres (mm)</Td>
          <Td borderLeft="1px solid #E2E8F0">25.4</Td>
          <Td borderLeft="1px solid #E2E8F0">25.4</Td>
        </Tbody>
      </Table>
    </Box>
    // <SimpleGrid marginTop={5} columns={2} spacing={5}>
    //   {task.map((todo) => (
    //     <TodoItem
    //       key={todo.id}
    //       todo={todo}
    //       onCompleteTaks={(id) => onCompleteTaks(id)}
    //       onImportantTask={(id) => onImportantTask(id)}
    //       removeTask={(id) => removeTask(id)}
    //     />
    //   ))}
    // </SimpleGrid>
  );
};
