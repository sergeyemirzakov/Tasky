import React from 'react';
import ReactDOM from 'react-dom';
import './AddTaskFrom.scss';

import { Box, Input, Text, Button } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/taskSlice';

export const AddTaskFrom = () => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>('');

  const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const onAddTaskHandler = () => {
    if (value !== '' && value.trim()) dispatch(addTodo(value));
    setValue('');
  };

  const OnKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.key === 'Enter') {
      onAddTaskHandler();
    }
  };

  return ReactDOM.createPortal(
    <>
      <Box className="modal__screen-overlay"></Box>
      <Box className="modal__screen" top="50%" left="50%" width="100%" maxW="500px">
        <Box display="flex" alignItems="baseline" justifyContent="space-between">
          <Text>Do you want to add a new taks???</Text>
          <IoMdClose cursor="pointer" />
        </Box>
        <Box marginTop="10px" marginBottom="10px">
          <Input
            onKeyDown={OnKeyDownHandler}
            focusBorderColor="blue.400"
            placeholder="Create a new task"
            value={value}
            onChange={onChangeValueHandler}
          />
        </Box>
        <Box>
          <Button onClick={onAddTaskHandler} colorScheme="blue">
            Add Task
          </Button>
        </Box>
      </Box>
    </>,
    modalRoot,
  );
};
