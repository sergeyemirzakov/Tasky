import React from 'react';

import { Button } from '@chakra-ui/react';

import { IoMdArrowRoundDown } from 'react-icons/io';

export const Filters: React.FC = () => {
  return (
    <Button
      _hover={{ backgroundColor: 'gray.500' }}
      fontWeight="400"
      marginLeft="10px"
      color="white"
      backgroundColor="brand.500">
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <IoMdArrowRoundDown style={{ marginRight: '5px' }} />
        Filters
      </span>
    </Button>
  );
};
