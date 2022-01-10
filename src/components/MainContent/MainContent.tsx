import React from 'react';

import { TodoList } from '../TodoList/TodoList';
import { Box, Input, Text } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import { Badges } from '../Badges/Badges';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../store/taskSlice';
import { RootState } from '../../store/store';

export const MainContent: React.FC = () => {
  const dispatch = useDispatch();
  const task = useSelector((state: RootState) => state.taskSliceReducer.todos);

  const [value, setValue] = React.useState<string>('');
  const [searchItem, setSearchItem] = React.useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const addTask = () => {
    if (value !== '' && value.trim()) dispatch(addTodo(value));
    setValue('');
  };

  const OnKeyPressDown: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <>
      <Box w="100%" display="flex" alignItems="center" flexDirection="column" p={8}>
        <Box maxW="1000px" w="100%">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Box
                bg="blue.400"
                w="40px"
                h="40px"
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginRight="1rem"
                borderRadius="md">
                <MdAdd size="1.5rem" color="white" onClick={addTask} />
              </Box>
              <Text fontWeight="medium">Add new task</Text>
            </Box>

            <Input
              onKeyDown={OnKeyPressDown}
              onChange={onChangeHandler}
              focusBorderColor="blue.400"
              variant="filled"
              w="70%"
              placeholder="Search"
              value={value}
            />
          </Box>
          <Badges task={task} />
          <TodoList task={task} value={value} />
        </Box>
      </Box>
    </>
  );
};
