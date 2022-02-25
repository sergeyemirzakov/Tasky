import React from 'react';

import { Box, Text, Badge, Button } from '@chakra-ui/react';
import { MdModeEditOutline, MdDragIndicator } from 'react-icons/md';
import { HiFlag } from 'react-icons/hi';
import { Todo } from '../../store/taskSlice';

interface TodoItem {
  todo: Todo;
  onCompleteTaks: (id: string) => void;
  onEditTask: (id: string, textValue: string, priority: string) => void;
}

interface Colors {
  low: string;
  medium: string;
  high: string;
}

export const TodoItem: React.FC<TodoItem> = ({ todo, onCompleteTaks, onEditTask }) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const [showEdit, setShowEdit] = React.useState<boolean>(false);

  const onClickHandler = (id: string) => {
    onCompleteTaks(id);
    setChecked((prev) => !prev);
  };

  let proirityColors: Colors = {
    low: '#D69E2E',
    medium: '#DD6B20',
    high: '#E53E3E',
  };

  let priorityColor = proirityColors[todo.priority.toLowerCase() as keyof Colors];

  return (
    <>
      <Box
        width="310px"
        minHeight="210px"
        boxShadow="sm"
        onMouseLeave={() => setShowEdit(false)}
        onMouseOver={() => setShowEdit(true)}
        borderRadius="lg"
        bg="white"
        padding="18px 15px"
        display="inline-flex"
        flexDirection="column"
        justifyContent="space-between">
        <Box>
          <Box marginBottom="5px" display="flex" justifyContent="space-between">
            <Text fontSize="18px" fontWeight="bold">
              {todo.text}
            </Text>
            <MdDragIndicator cursor="grab" color="lightgrey" size="1.2rem" />
          </Box>
          <Box marginBottom="20px">
            <Text color="gray.400">{todo.description}</Text>
          </Box>
        </Box>

        <Box>
          <Box display="flex" alignItems="center">
            <Text color="gray.400" fontSize="14px" marginRight="10px">
              Priority:
            </Text>
            <Box display="flex" alignItems="center">
              <HiFlag size="1.5rem" color={priorityColor} />
              <Badge
                backgroundColor={priorityColor}
                variant="solid"
                marginLeft="5px"
                fontSize="0.8rem">
                {todo.priority}
              </Badge>
            </Box>
          </Box>
          <Box marginTop="10px" display="flex" justifyContent="space-between">
            <Button
              onClick={() => onClickHandler(todo.id)}
              size="sm"
              fontSize="0.9rem"
              colorScheme={!checked ? 'gray' : 'green'}>
              {!checked ? 'In progress...' : 'It is Done =)'}
            </Button>
            {showEdit && (
              <Button
                size="sm"
                onClick={() => {
                  onEditTask(todo.id, todo.text, todo.priority);
                }}>
                <span style={{ display: 'flex' }}>
                  <MdModeEditOutline />
                  Edit
                </span>
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
