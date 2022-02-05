import React from 'react';
import './Logotype.scss';

import { Box, Text } from '@chakra-ui/react';

export const Logotype: React.FC = () => {
  return (
    <Box
      bg="orange.400"
      marginTop={4}
      width="90px"
      height="90px"
      borderRadius="md"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Box>
        <h1 className="logotype">Tasky</h1>
        <h2 className="sub__logotype">Task manager</h2>
      </Box>
    </Box>
  );
};
