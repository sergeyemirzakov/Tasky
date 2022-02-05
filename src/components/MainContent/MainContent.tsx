import React from 'react';

import { MainContentHeader } from '../MainContentHeader/MainContentHeader';
import { TodoList } from '../TodoList/TodoList';
import { Badges } from '../Badges/Badges';
import { AddTaskFrom } from '../AddTaskFrom/AddTaskFrom';

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
          <MainContentHeader
            onShowModalHandler={(booleanValue: boolean) =>
              onShowModalHandler(booleanValue)
            }
          />
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
