import React from 'react';
import ReactDOM from 'react-dom';

import { Box, Input, Text } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

export const AddTaskFrom = () => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(
    <Box>
      <h1>AddTaskFrom</h1>
    </Box>,
    modalRoot,
  );
};
