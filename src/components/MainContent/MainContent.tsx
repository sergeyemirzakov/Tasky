import React from 'react';

import { TodoList } from '../TodoList/TodoList';
import { Badges } from '../Badges/Badges';
import { AddNewTask } from '../AddNewTask/AddNewTask';
import { AddTaskFrom } from '../AddTaskFrom/AddTaskFrom';
import { SearchField } from '../SearchField/SearchField';

import { Box } from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const MainContent: React.FC = () => {
  const task = useSelector((state: RootState) => state.taskSliceReducer.todos);

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const onShowModalHandler = (booleanValue: boolean): void => {
    setShowModal(booleanValue);
  };

  return (
    <>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        py={1}
        paddingLeft={7}>
        <Box width="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={5}
            borderRadius={10}
            bg="white"
            boxShadow="sm">
            <Box display="flex" alignItems="center" marginRight={5}>
              <AddNewTask
                onShowModalHandler={(booleanValue: boolean) =>
                  onShowModalHandler(booleanValue)
                }
              />
            </Box>
            <SearchField />
          </Box>
          <Badges task={task} />
          {showModal && (
            <AddTaskFrom
              onShowModalHandler={(booleanValue: boolean) =>
                onShowModalHandler(booleanValue)
              }
            />
          )}
          <TodoList task={task} value={''} />
        </Box>
      </Box>
    </>
  );
};
