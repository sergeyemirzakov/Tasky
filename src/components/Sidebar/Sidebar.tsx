import React from 'react';

import { Logotype } from '../Logotype/Logotype';

import { TiInfoLargeOutline } from 'react-icons/ti';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import { Box } from '@chakra-ui/react';

export const Sidebar: React.FC = () => {
  return (
    <>
      <Box
        bg="white"
        height="95vh"
        width="250px"
        display="flex"
        borderRadius={10}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        margin="auto"
        py={5}
        px={5}>
        <Logotype />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box marginBottom={5}>
            <TiInfoLargeOutline size="1.8rem" cursor="pointer" color="white" />
          </Box>
          <Box>
            <HiOutlineColorSwatch size="1.6rem" cursor="pointer" color="white" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
