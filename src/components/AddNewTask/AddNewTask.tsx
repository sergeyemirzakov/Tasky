import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

interface IAddNewTask {
  onShowModalHandler: (booleanValue: boolean) => void;
}

export const AddNewTask: React.FC<IAddNewTask> = ({ onShowModalHandler }) => {
  return (
    <>
      <Button
        fontWeight="400"
        _hover={{ backgroundColor: 'green.600' }}
        onClick={() => onShowModalHandler(true)}
        bg="green.500"
        color="white"
        cursor="pointer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="md">
        <Box marginRight={3}>
          <MdAdd size="1.5rem" color="white" />
        </Box>
        Add new task
      </Button>
    </>
  );
};
