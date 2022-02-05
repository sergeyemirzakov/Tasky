import React from 'react';

import { Box, Badge, Text } from '@chakra-ui/react';

interface BadgeTypes {
  task: string[];
}

export const Badges: React.FC<BadgeTypes> = ({ task }) => {
  return (
    <>
      <Box
        marginTop={14}
        display="flex"
        alignItems="center"
        justifyContent="space-between">
        <Box>
          <Badge marginRight={2} borderRadius="sm" colorScheme="gray" fontSize="12px">
            Default
          </Badge>
          <Badge marginRight={2} borderRadius="sm" colorScheme="red" fontSize="12px">
            Important
          </Badge>
          <Badge marginRight={2} borderRadius="sm" colorScheme="green" fontSize="12px">
            Done
          </Badge>
        </Box>
      </Box>
      <Box>
        <Text marginTop={2}>Total amount: {task.length}</Text>
      </Box>
    </>
  );
};
