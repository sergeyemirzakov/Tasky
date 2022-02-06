import React from 'react';

import { Box, Text, Switch, Checkbox, Badge } from '@chakra-ui/react';
import { Tbody, Tr, Td } from '@chakra-ui/react';
import { RiEdit2Line } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { CustomTextField } from '../CustomTextField/CustomTextField';

interface TodoItem {
  todo: {
    id: string;
    priority: string;
    complete: boolean;
    text: string;
  };
  onCompleteTaks: (id: string) => void;
  // onImportantTask: (id: string) => void;
  removeTask: (id: string) => void;
  onEditTask: (id: string) => void;
}

export const TodoItem: React.FC<TodoItem> = ({
  todo,
  onCompleteTaks,
  removeTask,
  onEditTask,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const [showEdit, setShowEdit] = React.useState<boolean>(false);

  const onChangeHandler = (id: string) => {
    onCompleteTaks(id);
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Tbody>
        <Tr>
          <Td>
            <Box>
              <MdDeleteOutline size="1.2rem" cursor="pointer" />
            </Box>
          </Td>
          <Td
            onClick={() => onEditTask(todo.id)}
            onMouseLeave={() => setShowEdit(false)}
            onMouseOver={() => setShowEdit(true)}
            borderLeft="0.5px solid #E2E8F0"
            cursor="pointer"
            _hover={{ backgroundColor: 'orange.50' }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex">
                <Checkbox
                  checked={checked}
                  onChange={() => onChangeHandler(todo.id)}
                  colorScheme="green"
                  marginRight={3}
                />
                <Text>{todo.text}</Text>
              </Box>
              {showEdit && (
                <Box display="flex" alignItems="center" cursor="pointer">
                  <Box>
                    <RiEdit2Line />
                  </Box>
                  <Text fontSize="xs">Edit</Text>
                </Box>
              )}
            </Box>
          </Td>
          <Td borderLeft="0.5px solid #E2E8F0">
            <Badge variant="outline">{todo.priority}</Badge>
          </Td>
          <Td borderLeft="0.5px solid #E2E8F0">
            <Badge colorScheme={!todo.complete ? 'blue' : 'green'} variant="outline">
              {!todo.complete ? 'In progress' : 'Done'}
            </Badge>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};
