import React from 'react';

import { AddNewTask } from '../AddNewTask/AddNewTask';
import { SearchField } from '../SearchField/SearchField';
import { DateToday } from '../DateToday/DateToday';
import { Filters } from '../Filters/Filters';

import { Box } from '@chakra-ui/react';

interface IMainContentHeader {
  onShowModalHandler: (booleanValue: boolean) => void;
}

export const MainContentHeader: React.FC<IMainContentHeader> = ({
  onShowModalHandler,
}) => {
  return (
    <>
      <Box className="container">
        <Box margin="20px 0 40px 0">
          <DateToday />
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box maxWidth="500px" width="100%">
              <SearchField />
            </Box>
            <Box display="flex" alignItems="center">
              <AddNewTask
                onShowModalHandler={(booleanValue: boolean) =>
                  onShowModalHandler(booleanValue)
                }
              />
              <Filters />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
