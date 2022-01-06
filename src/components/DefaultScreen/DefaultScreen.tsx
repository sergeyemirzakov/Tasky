import React from 'react';

import { Box, Heading } from '@chakra-ui/react';

export const DefaultScreen = () => {
  return (
    <>
      <Box height="75vh" display="flex" alignItems="center" justifyContent="center">
        <Heading as="h1" size="3xl" color="gray.200">
          No tasks for today :)
        </Heading>
      </Box>
    </>
  );
};
