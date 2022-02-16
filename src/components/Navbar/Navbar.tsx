import React from 'react';

import { Logotype } from '../Logotype/Logotype';

import { MdDashboardCustomize } from 'react-icons/md';
import { RiInformationFill } from 'react-icons/ri';
import { RiSettings4Fill } from 'react-icons/ri';
import { RiTimerFill } from 'react-icons/ri';

import { Box, Text } from '@chakra-ui/react';

export const Navbar: React.FC = () => {
  return (
    <>
      <Box>
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            py={4}
            px={4}
            transition="opacity .2s"
            opacity="1"
            _hover={{ opacity: '1' }}>
            <MdDashboardCustomize size="1.3rem" cursor="pointer" color="white" />
            <Text color="white" fontSize="15px" marginLeft={2}>
              Dashboard
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            py={4}
            px={4}
            transition="opacity .2s"
            opacity="0.7"
            _hover={{ opacity: '1' }}>
            <RiTimerFill size="1.3rem" cursor="pointer" color="white" />
            <Text color="white" fontSize="15px" marginLeft={2}>
              Pomidoro
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            py={4}
            px={4}
            transition="opacity .2s"
            opacity="0.7"
            _hover={{ opacity: '1' }}>
            <RiSettings4Fill size="1.3rem" cursor="pointer" color="white" />
            <Text color="white" fontSize="15px" marginLeft={2}>
              Settings
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            py={4}
            px={4}
            transition="opacity .2s"
            opacity="0.7"
            _hover={{ opacity: '1' }}>
            <RiInformationFill size="1.3rem" cursor="pointer" color="white" />
            <Text color="white" fontSize="15px" marginLeft={2}>
              Info
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
