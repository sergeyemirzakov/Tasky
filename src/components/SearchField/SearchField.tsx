import React from 'react';

import { Input } from '@chakra-ui/react';

export const SearchField: React.FC = () => {
  return (
    <>
      <Input focusBorderColor="orange.400" w="30%" placeholder="Search" />
    </>
  );
};
