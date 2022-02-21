import React from 'react';

import { Box, Text, Badge } from '@chakra-ui/react';
import { GoCalendar } from 'react-icons/go';
import { month } from '../../util/month';
import { days } from '../../util/days';

export const DateToday: React.FC = () => {
  const [dating, setDating] = React.useState<string>('');

  const getDate = (): void => {
    const date: string = `${new Date().getDate()} ${month[new Date().getMonth()]},
    ${days[new Date().getDay()]}`;
    setDating(date);
  };

  React.useEffect(() => {
    getDate();
  }, [dating]);

  return (
    <>
      <Box
        display="flex"
        alignItems="baseline"
        px={2}
        py={1}
        marginBottom="5px"
        borderRadius="md"
        fontSize="12px"
        color="gray.500">
        <Box color="gray.500" marginRight={1}>
          <GoCalendar />
        </Box>
        <Text>Today is: {dating}</Text>
      </Box>
    </>
  );
};
