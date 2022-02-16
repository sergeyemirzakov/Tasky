import React from 'react';

import { Box } from '@chakra-ui/react';
import { Logotype } from '../Logotype/Logotype';
import { Navbar } from '../Navbar/Navbar';

export const Header: React.FC = () => {
  return (
    <>
      <Box style={headerStyles} bg="brand.500">
        <div className="container">
          <Box display="flex" justifyContent="space-between">
            <Logotype />
            <Navbar />
          </Box>
        </div>
      </Box>
    </>
  );
};

const headerStyles = {
  // backgroundColor: 'dodgerblue',
  // backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
};
