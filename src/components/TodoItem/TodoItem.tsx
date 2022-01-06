import React from 'react';

import { Box, Text, Switch } from '@chakra-ui/react';
import { GrClose } from 'react-icons/gr';
import { RiEdit2Line } from 'react-icons/ri';
import classNames from 'classnames';

interface TodoItem {
  todo: {
    id: string;
    important: boolean;
    complete: boolean;
    text: string;
  };
  onCompleteTaks: (id: string) => void;
  onImportantTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export const TodoItem: React.FC<TodoItem> = ({
  todo,
  onCompleteTaks,
  onImportantTask,
  removeTask,
}) => {
  return (
    <>
      <Box
        className={classNames(
          'default',
          { important: todo.important },
          { complete: todo.complete },
        )}
        key={todo.id}
        p={2}
        borderRadius="md"
        height="80px">
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <Box display="flex">
            <Box display="flex" alignItems="center">
              <Text fontSize={12} marginRight={1}>
                Important
              </Text>
              <Switch
                onChange={() => onImportantTask(todo.id)}
                isChecked={todo.important}
                size="sm"
                colorScheme="red"
                marginRight={4}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize={12} marginRight={1}>
                Done
              </Text>
              <Switch
                onChange={() => onCompleteTaks(todo.id)}
                isChecked={todo.complete}
                size="sm"
                colorScheme="green"
              />
            </Box>
          </Box>
          <GrClose onClick={() => removeTask(todo.id)} cursor="pointer" />
        </Box>
        <Text>{todo.text}</Text>
        <Box display="flex" justifyContent="flex-end">
          <RiEdit2Line cursor="pointer" />
        </Box>
      </Box>
    </>
  );
};
