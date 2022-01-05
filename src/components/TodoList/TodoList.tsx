import React from 'react';
import './TodoList.scss';

import { GrClose } from 'react-icons/gr';
import { Box, SimpleGrid, Switch, Text } from '@chakra-ui/react';
import classNames from 'classnames';

import { isComplete, isImportant, isRemoveTask } from '../../store/taskSlice';
import { useDispatch } from 'react-redux';

interface TodoListProps {
  task: {
    id: string;
    text: string;
    complete: boolean;
    important: boolean;
  }[];
  value: string;
}

export const TodoList: React.FC<TodoListProps> = ({ task, value }) => {
  const dispatch = useDispatch();

  const onCompleteTaks = (id: string) => {
    dispatch(isComplete(id));
  };

  const onImportantTask = (id: string) => {
    dispatch(isImportant(id));
  };

  const removeTask = (id: string) => {
    dispatch(isRemoveTask(id));
  };

  return (
    <SimpleGrid marginTop={5} columns={2} spacing={5}>
      {task.length === 0 ? (
        <Text>No tasks for today</Text>
      ) : (
        task
          .filter((v) => {
            if (value === '') return v;
            else if (v.text.toLowerCase().includes(value.toLowerCase())) return v;
          })
          .map((todo) => (
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
              {todo.text}
            </Box>
          ))
      )}
    </SimpleGrid>
  );
};
