import React from 'react';

import { Box, Text } from '@chakra-ui/react';

export const ScreenTitle: React.FC = () => {
  return (
    <>
      <Box padding="12px 0" bg="gray.100">
        <Box className="container">
          <Text fontWeight="bold" fontSize="lg">
            Dashboard
          </Text>
        </Box>
      </Box>
    </>
  );
};
