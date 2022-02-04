import React from 'react';

import { Box } from '@chakra-ui/react';

export const Logotype: React.FC = () => {
  return (
    <Box>
      <svg
        width="38"
        height="37"
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="10" width="9" height="37" fill="#4A5568" />
        <rect x="19" width="8" height="19" transform="rotate(90 19 0)" fill="#4A5568" />
        <circle cx="30.5" cy="7.5" r="7.5" fill="#4A5568" />
      </svg>
    </Box>
  );
};
