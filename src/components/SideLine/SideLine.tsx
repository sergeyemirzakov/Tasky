import React from 'react';

import Logo from '../../logo.svg';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import { Box } from '@chakra-ui/react';

export const SideLine: React.FC = () => {
  return (
    <>
      <Box
        bg="blue.400"
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        py={9}
        px={3}>
        <Box>
          <img src={Logo} alt="" />
        </Box>
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
