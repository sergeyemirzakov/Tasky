import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

export const AddNewTask: React.FC = () => {
  return (
    <>
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
        <MdAdd size="1.5rem" color="white" />
      </Box>
      <Text fontWeight="medium">Add new task</Text>
    </>
  );
};
