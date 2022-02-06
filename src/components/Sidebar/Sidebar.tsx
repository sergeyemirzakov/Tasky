import React from 'react';

import { Logotype } from '../Logotype/Logotype';

import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { MdOutlineInfo } from 'react-icons/md';
import { MdOutlineSettings } from 'react-icons/md';
import { MdTimer } from 'react-icons/md';

import { Box, Text } from '@chakra-ui/react';

export const Sidebar: React.FC = () => {
  return (
    <>
      <Box
        position="relative"
        zIndex="10"
        bg="white"
        height="100%"
        width="250px"
        display="flex"
        borderRadius="xl"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        py={2}
        px={0}
        boxShadow="sm">
        <Logotype />
        <Box marginTop={10} width="100%">
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            py={4}
            px={4}
            w="100%"
            _hover={{ backgroundColor: 'orange.100' }}>
            <MdOutlineDashboardCustomize size="1.7rem" cursor="pointer" color="#4A5568" />
            <Text marginLeft={3}>Dashboard</Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            py={4}
            px={4}
            w="100%"
            _hover={{ backgroundColor: 'orange.100' }}>
            <MdTimer size="1.7rem" cursor="pointer" color="#4A5568" />
            <Text marginLeft={3}>Pomidoro</Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            py={4}
            px={4}
            w="100%"
            _hover={{ backgroundColor: 'orange.100' }}>
            <MdOutlineSettings size="1.7rem" cursor="pointer" color="#4A5568" />
            <Text marginLeft={3}>Settings</Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            py={4}
            px={4}
            w="100%"
            _hover={{ backgroundColor: 'orange.100' }}>
            <MdOutlineInfo size="1.7rem" cursor="pointer" color="#4A5568" />
            <Text marginLeft={3}>Info</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
