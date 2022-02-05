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
        onClick={() => onShowModalHandler(true)}
        bg="orange.400"
        color="white"
        cursor="pointer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginRight="1rem"
        borderRadius="md"
        _hover={{ backgroundColor: 'orange.300' }}>
        <Box marginRight={3}>
          <MdAdd size="1.5rem" color="white" />
        </Box>
        Add new task
      </Button>
    </>
  );
};
