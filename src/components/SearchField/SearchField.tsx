import React from 'react';

import { Input } from '@chakra-ui/react';

export const SearchField: React.FC = () => {
  return (
    <>
      <Input focusBorderColor="blue.400" variant="filled" w="70%" placeholder="Search" />
    </>
  );
};
