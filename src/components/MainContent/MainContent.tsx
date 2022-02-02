import React from 'react';

import { TodoList } from '../TodoList/TodoList';
import { Badges } from '../Badges/Badges';
import { AddNewTask } from '../AddNewTask/AddNewTask';
import { AddTaskFrom } from '../AddTaskFrom/AddTaskFrom';

import { Box, Input } from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const MainContent: React.FC = () => {
  const task = useSelector((state: RootState) => state.taskSliceReducer.todos);

  return (
    <>
      <Box w="100%" display="flex" alignItems="center" flexDirection="column" p={8}>
        <Box maxW="1000px" w="100%">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <AddNewTask />
            </Box>
            <Input
              focusBorderColor="blue.400"
              variant="filled"
              w="70%"
              placeholder="Search"
            />
          </Box>
          <Badges task={task} />
          <AddTaskFrom />
          <TodoList task={task} value={''} />
        </Box>
      </Box>
    </>
  );
};
