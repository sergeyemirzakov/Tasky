import React from 'react';
import './Logotype.scss';

import { Box, Text } from '@chakra-ui/react';

export const Logotype: React.FC = () => {
  return (
    <Box display="inline-flex" alignItems="center" justifyContent="center">
      <Box color="white">
        <h1 className="logotype">Tasky</h1>
      </Box>
    </Box>
  );
};
