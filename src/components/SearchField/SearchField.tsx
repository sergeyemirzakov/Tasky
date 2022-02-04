import React from 'react';

import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';

import { BiSearch } from 'react-icons/bi';

export const SearchField: React.FC = () => {
  return (
    <Box width="30%">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearch size="1.2rem" color="orange.500" />}
        />
        <Input type="text" focusBorderColor="orange.400" placeholder="Search..." />
      </InputGroup>
    </Box>
  );
};
