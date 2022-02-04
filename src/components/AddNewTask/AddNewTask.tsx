import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

interface IAddNewTask {
  onShowModalHandler: (booleanValue: boolean) => void;
}

export const AddNewTask: React.FC<IAddNewTask> = ({ onShowModalHandler }) => {
  return (
    <>
      <Box
        onClick={() => onShowModalHandler(true)}
        bg="orange.400"
        w="40px"
        h="40px"
        cursor="pointer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginRight="1rem"
        borderRadius="md">
        <MdAdd size="1.5rem" color="white" />
      </Box>
      <Text fontWeight="medium">Add new task</Text>
    </>
  );
};
