import React from 'react';
import ReactDOM from 'react-dom';
import './AddTaskFrom.scss';

import { Box, Input, Text, Button } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

export const AddTaskFrom = () => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(
    <>
      <Box className="modal__screen-overlay"></Box>
      <Box
        className="modal__screen"
        top="50%"
        left="50%"
        width="100%"
        maxW="500px">
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between">
          <Text>Do you want to add a new taks???</Text>
          <IoMdClose cursor="pointer" />
        </Box>
        <Box marginTop="10px" marginBottom="10px">
          <Input
            focusBorderColor="blue.400"
            placeholder="Create a new task"
          />
        </Box>
        <Box>
          <Button colorScheme="blue">Add Task</Button>
        </Box>
      </Box>
    </>,
    modalRoot,
  );
};
