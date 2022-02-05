import React from 'react';

import { AddNewTask } from '../AddNewTask/AddNewTask';
import { SearchField } from '../SearchField/SearchField';
import { DateToday } from '../DateToday/DateToday';

import { Box } from '@chakra-ui/react';

interface IMainContentHeader {
  onShowModalHandler: (booleanValue: boolean) => void;
}

export const MainContentHeader: React.FC<IMainContentHeader> = ({
  onShowModalHandler,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={5}
      borderRadius="xl"
      bg="white"
      boxShadow="sm">
      <Box display="flex" alignItems="center" marginRight={5}>
        <AddNewTask
          onShowModalHandler={(booleanValue: boolean) => onShowModalHandler(booleanValue)}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="500px"
        width="100%">
        <DateToday />
        <SearchField />
      </Box>
    </Box>
  );
};
